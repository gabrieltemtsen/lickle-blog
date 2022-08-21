<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
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
const getDate = () => {
  const formatedDate = friendlyDate(post.value.date);
  return { formatedDate };
};
const { formatedDate } = getDate();

const getAuthor = () => {
  const author = postStore.getAuthorById(post.value.user_id);
};
getAuthor();
</script>
<template>
  <article class="col-12 col-md-6 tm-post">
    <hr class="tm-hr-primary" />
    <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
      <div class="tm-post-link-inner">
        <img :src="post.image_url" alt="Image" class="img-fluid" />
      </div>
      <!-- post title -->
      <h2 class="tm-pt-30 tm-color-primary tm-post-title">
        {{ post.title }}
      </h2>
    </a>
    <p class="tm-pt-30">
      {{ post.description }}
    </p>
    <div class="d-flex justify-content-between tm-pt-45">
      <span class="tm-color-primary">{{ post.category }}</span>
      <span class="tm-color-primary">{{ formatedDate }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>36 comments</span>
      <span>by {{ postStore.author }}</span>
    </div>
  </article>
</template>
