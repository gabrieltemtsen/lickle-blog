import { defineStore } from "pinia";
import axios from "axios";
import type { LoginUser, Post } from "@/interface";
import router from "@/router";

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
        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("there is an error guy");
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
        this.logout();
      }
    },
    async registerUser(payload: LoginUser) {
      try {
        const res = await axios.post(`http://localhost:3000/register`, payload);
        this.hasError = false;
        this.success = true;
        this.successMsg;
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
      router.push("/login");
    },
  },
});

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    imageUrl: "",
    cloudinary_id: "",
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
        this.hasError = false;
        // redirect to previous url or default to home page
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("there is an error guy");
        // const { msg } = error.response.data;
        // this.hasError = true;
        // this.errMsg = msg;
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

        this.hasError = false;
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
  },
});
