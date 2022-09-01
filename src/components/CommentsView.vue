<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAuthStore, usePostStore } from "@/stores";
import { useDateCalculation } from "@/utility";
import axios from "axios";
import { computed, ref } from "vue";
import type { Comment1, Post } from "../interface";

const auth = useAuthStore();

const postStore = usePostStore();
const props = defineProps<{
  data: Comment1;
}>();

const comment = computed(() => props.data);

const author = ref();
const getCommentAuthor = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/comments/author/${comment.value.user_id}`
    );
    author.value = res.data;
  } catch (error: any) {
    console.log("there is an error guy");
  }
};
getCommentAuthor();
let isLogged = false;
const checkUser = () => {
  if (comment.value.user_id === auth.user._id) {
    isLogged = true;
  }
};
console.log(isLogged);
checkUser();
</script>
<template>
  <div class="tm-comment-reply tm-mb-45">
    <div class="tm-comment">
      <figure class="tm-comment-figure">
        <figcaption class="tm-color-primary text-center">
          {{ author }}
        </figcaption>
      </figure>
      <p>
        {{ comment.comment }}
      </p>
    </div>
    <span class="d-block text-right tm-color-primary" v-if="isLogged"
      >delete</span
    >
    <hr />
  </div>
</template>
