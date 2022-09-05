/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from "pinia";
import axios from "axios";
import type { Comment1, Like, LoginUser, Post } from "@/interface";
import router from "@/router";
import posts from "@/postsApi";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";


export const useAuthStore = defineStore({
  id: "counter",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    token: localStorage.getItem("token"),
    returnUrl: null,
    hasError: false,
    errMsg: "",
    success: false,
    successMsg: "Registeration Successfull!",
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async login(payload: LoginUser) {
      try {
        const res = await axios.post(
          `http://localhost:3000/auth/login`,
          payload
        );
        const { token, user } = res.data;

        this.user = user;
        this.token = token;
        this.hasError = false;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user) || "{}");
        createToast(
          { title: "Success", description: "Login successful" },
          {
            transition: "bounce",
            type: "success",
            showIcon: true,
            timeout: 1500,
          }
        );
        // redirect to previous url or default to home page
        setTimeout(() => router.push({ path: "/" }), 1000);
        

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("Network Errror, please check your connection");
        createToast(
          {
            title: "email or password incorect",
            description: "please try again.",
          },
          {
            transition: "bounce",
            type: "danger",
            showIcon: true,
            timeout: 2000,
          }
        );
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
    async registerUser(payload: LoginUser) {
      try {
        const res = await axios.post(
          `http://localhost:3000/users/register`,
          payload
        );
        this.hasError = false;
        this.success = true;
        this.successMsg;
        createToast(
          { title: "Success", description: "Registration successful" },
          {
            transition: "bounce",
            type: "success",
            showIcon: true,
            timeout: 3000,
          }
        );
        setTimeout(() => router.push({ path: "/login" }), 1000);
      } catch (error: any) {
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
      logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.go();
      router.push("/login");
    },
  },
});

interface States {
  posts: any;
  author: string;
  imageUrl: string;
  onePost: any;
  cloudinary_id: string;
  token: string;
  returnUrl: any;
  Comment: any;
  commentAuthor: any;
  likes: any;
  isSearched: any;
}
export const usePostStore = defineStore({
  id: "post",
  state: (): States => ({
    posts,
    author: "",
    onePost: [],
    imageUrl: "",
    Comment,
    likes: "",
    commentAuthor: "",
    cloudinary_id: "",
    token: localStorage.getItem("token") || "",
    returnUrl: null,
    isSearched: "",
    // hasError: false,
    // errMsg: "",
    // success: false,
    // successMsg: "Registeration Successfull!",
    // search: "",
  }),
  getters: {
    // getAllPosts(state) {
    //   return state.posts;
    // },
  },
  actions: {
    async imagePost(formData: any) {
      try {
        const token: any = this.token;
        const res = await axios.post(
          `http://localhost:3000/utility`,
          formData,
          {
            headers: {
              "Content-type": "multi-part/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { imageUrl, cloudinary_id } = res.data;

        this.imageUrl = imageUrl;
        this.cloudinary_id = cloudinary_id;
        // this.hasError = false;
        // redirect to previous url or default to home page
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("there is an error guy");
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
    async getPosts(search?: any, page?: any) {
      const arr = [];
      if (search) {
        arr.push(`s=${search}`);
      }
      if (page) {
        arr.push(`page=${page}`);
      }
      try {
        const res = await axios.get(
          `http://localhost:3000/posts?${arr.join("&")}`,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        // this.posts = res.data.data;
      } catch (e: any) {
        // hasError.value = e.response.data;
      }
    },
    async createPost(payload: Post) {
      try {
        const token: any = this.token;
        const res = await axios.post(`http://localhost:3000/posts`, payload, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // this.hasError = false;
        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("there is an error guy");
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
    async createComment(payload: Comment1) {
      const { post_id } = payload;
      try {
        const token: any = this.token;

        const res = await axios.post(
          `http://localhost:3000/comments`,
          payload,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        createToast(
          { title: "Success", description: "Comment added" },
          {
            transition: "zoom",
            type: "success",
            showIcon: true,
            timeout: 2000,
          }
        );
        this.getComments(post_id);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("there is an error guy");
        if (error.response.status === 401) {
          createToast(
            { title: "Please Login", description: "" },
            {
              transition: "bounce",
              type: "danger",
              showIcon: true,
              timeout: 2000,
            }
          );
        }

        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
    async getComments(id?: any) {
      try {
        const res = await axios.get(`http://localhost:3000/comments/${id}`, id);
        this.Comment = res.data.comments;
      } catch (error: any) {
        console.log("there is an error guy");
      }
    },
    async getCommentAuthor(id: any) {
      try {
        const res = await axios.get(
          `http://localhost:3000/comments/author/${id}`,
          id
        );
        this.commentAuthor = res.data;
      } catch (error: any) {
        console.log("there is an error guy");
      }
    },
    async getAuthorById(id: any) {
      try {
        const res = await axios.get(
          `http://localhost:3000/posts/author/${id}`,
          id
        );
        this.author = res.data;
      } catch (error: any) {
        console.log("there is an error guy");
      }
    },
    async getPostById(id: any) {
      try {
        const res = await axios.get(
          `http://localhost:3000/posts/post/${id}`,
          id
        );
        this.onePost = res.data;
        return res.data;
      } catch (error: any) {
        console.log("there is an error guy");
      }
    },
    async getLikes(id: any) {
      try {
        const res = await axios.get(`http://localhost:3000/likes/${id}`, id);
        this.likes = res.data;
      } catch (error: any) {
        console.log("Liked::Already");
      }
    },
    Searched(msg?: string) {
      this.isSearched = msg;
      console.log(this.isSearched);
    },
    async createLike(payload: Like) {
      const { post_id } = payload;
      try {
        const token: any = this.token;
        const res = await axios.post(`http://localhost:3000/likes`, payload, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        this.getLikes(post_id);
      } catch (error: any) {
        console.log("there is an error guy");
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
      }
    },
  },
});
