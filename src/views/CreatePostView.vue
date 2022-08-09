<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive, ref } from "vue";
import { usePostStore } from "@/stores/index";
import type { Post } from "@/interface";
//get store
// const data = useShoppingStore();
const postStore = usePostStore();

const imageUrl = postStore.imageUrl;
const public_id = postStore.cloudinary_id;



const post = reactive<Post>({
  title: "",
  description: "",
  category: "",
  body: "",
  image_url: imageUrl,
  cloudinary_id: public_id,
});
const selectedImage = ref();
const postImage = () => {
  const formData = new FormData();
  const image = selectedImage.value.files[0];
  formData.append("image-file", image);
  postStore.imagePost(formData);
};
const submit = async (data: any) => {
  await postStore.createPost(data);
};
</script>

<template>
  <div>
    <h5>lickle-blog <i class="fa fa-caret-right"> Login</i></h5>
  </div>
  <section class="pt-9">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="card">
        <div class="card-body">
          <span class="text-center"><h1>Create Post</h1></span>

          <Form @submit="submit(post)" method="post" v-slot="{ isSubmitting }">
            <div class="container">
              <label for="psw"><b>Post Image</b></label>
              <input
                @input="postImage"
                ref="selectedImage"
                type="file"
                required
              />
              <hr />

              <label for="title"><b>Title</b></label>
              <input
                type="text"
                placeholder="Enter Post Title"
                name="email"
                v-model="post.title"
                required
              />

              <label for="titlw"><b>Description</b></label>
              <input
                type="text"
                placeholder="Enter a short description"
                name="email"
                v-model="post.description"
                required
              />
              <label for="title"><b>Category</b></label>
              <select name="categories">
                <option value="sport">Sport</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
                <option value="others">Others</option>
              </select>
              <label for="titlw"><b>Body</b></label>
              <input
                type="text"
                placeholder="Enter Post Body"
                name="email"
                v-model="post.body"
                required
              />
              <hr />

              <button
                :disabled="isSubmitting"
                type="submit"
                class="registerbtn"
              >
                <span
                  v-show="isSubmitting"
                  class="spinner-border spinner-border-sm mr-1"
                ></span>
                Post
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #161625;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
