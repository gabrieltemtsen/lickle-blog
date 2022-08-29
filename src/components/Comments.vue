<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- <script setup lang="ts">
import { usePostStore } from "@/stores";
import { useDateCalculation } from "@/utility";
import { computed } from "vue";
import type { Post } from "../interface";

const { friendlyDate } = useDateCalculation();
const props = defineProps<{
  data: Post;
}>();
const postStore = usePostStore();
const post = computed(() => props.data);

// const getDate = () => {
//   const formatedDate = friendlyDate(post.value.date);
//   return { formatedDate };
// };
// const { formatedDate } = getDate();

const getAuthor = () => {
  const author = postStore.getAuthorById(post.value.user_id);
};
getAuthor();
const getComments = () => {
  const comments = postStore.getComments(post.value.user_id);
};
getComments();

const Comments = postStore.Comments;

</script> -->
<template>
  <div class="tm-comment-reply tm-mb-45">
    <div class="tm-comment">
      <figure class="tm-comment-figure">
        <figcaption class="tm-color-primary text-center">Jewel Soft</figcaption>
      </figure>
      <p>
        Nunc et eros quis enim feugiat tincidunt et vitae dui. Nullam
        consectetur justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus
        sapien vel, euismod turpis.
      </p>
    </div>
    <span class="d-block text-right tm-color-primary">June 21, 2020</span>
    <hr />
  </div>
</template>
