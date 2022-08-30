<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { usePostStore } from "@/stores";
import { useDateCalculation } from "@/utility";
import { reactive, ref, computed } from "vue";
import CommentsView from "@/components/CommentsView.vue";
import type { Comment1 } from "@/interface";
import axios from "axios";
import VueBasicAlert from "vue-basic-alert";

const { friendlyDate } = useDateCalculation();
const postStore = usePostStore();

const props = defineProps({
  id: { type: String, required: true },
});

const post_id = ref(props.id);

const post = computed(() => postStore.onePost);

const getData = async () => {
  const response = await postStore.getPostById(post_id.value);
  if (response) {
    await postStore.getAuthorById(response.user_id);
  }
};
getData();

const payload = reactive<Comment1>({
  comment: "",
  post_id: post_id.value,
});

const sendComment = () => {
  return postStore.createComment(payload);
};

const getCommentsbyId = () => {
  return postStore.getComments(post_id.value);
};
getCommentsbyId();
const showDismissibleAlert = false;
</script>

<template>
  <div>
    <h5>lickle-blog <i class="fa fa-caret-right"></i></h5>
  </div>
  <div class="row tm-row">
    <div class="col-12">
      <hr class="tm-hr-primary tm-mb-55" />
      <img :src="post.image_url" alt="" class="img-fluid" />

      <!-- Video player 1422x800 -->
      <!-- <video width="954" height="535" controls class="tm-mb-40">
          <source src="video/wheat-field.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
    </div>
  </div>
  <div class="row tm-row">
    <div class="col-lg-8 tm-post-col">
      <div class="tm-post-full">
        <div class="mb-4">
          <h2 class="pt-2 tm-color-primary tm-post-title">
            {{ post.title }}
          </h2>
          <p class="tm-mb-40">
            {{ friendlyDate(post.date) }}. By {{ postStore.author }}
          </p>
          <p>{{ post.body }}</p>

          <span class="d-block text-right tm-color-primary">{{
            post.category
          }}</span>
        </div>
        <button class="btn tm-color-primary btn-block">
          18 <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        </button>
        <hr />
        <!-- Comments -->
        <div>
          <h2 class="py-5 tm-color-primary tm-post-title">Comments</h2>
          <hr class="tm-hr-primary tm-mb-45" />
          <CommentsView
            v-for="comment in postStore.Comment"
            :data="comment"
            :key="comment._id"
          />
          <hr />

          <form @submit.prevent="sendComment" class="mb-5 tm-comment-form">
            <h2 class="tm-color-primary tm-post-title mb-4">Your comment</h2>

            <div class="mb-4">
              <textarea
                class="form-control"
                v-model="payload.comment"
                name="message"
                rows="9"
              ></textarea>
            </div>
          
            <div class="text-right">
              <button class="tm-btn tm-btn-primary tm-btn-small">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
