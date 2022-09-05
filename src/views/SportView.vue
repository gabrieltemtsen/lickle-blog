<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { usePostStore } from "@/stores";
import PostCard from "@/components/PostCard.vue";
import { computed, onMounted, reactive, ref } from "vue";
import type { Post } from "@/interface";
import axios from "axios";

const posts = ref();
const total_page = ref();

const getData = async (search?: any, page?: any) => {
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
    posts.value = res.data.data;
    total_page.value = res.data.last_page;
  } catch (e: any) {
    console.log(e);
  }
  // if(!response){
  //   `<div> error in getting data </div>`;
  // }
};
const page = reactive({
  count: 1,
  currentPage: 1,
});
const paginate = () => {
  page.currentPage++;
  return getData("sports", page.currentPage);
};
getData("sports");
</script>

<template>
  <main>
    <div>
      <h5>lickle-blog <i class="fa fa-caret-right"></i> sports</h5>
    </div>
    <PostCard
      v-for="post in posts"
      :data="post"
      :key="post._id"
      @item-clicked="$router.push({ name: 'Post', params: { id: post._id } })"
    />
    <div class="row tm-row tm-mt-100 tm-mb-75">
      <div class="tm-prev-next-wrapper">
        <a
          href="#"
          class="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20"
          >Prev</a
        >
        <a
          href="#"
          @click="paginate"
          class="mb-2 tm-btn tm-btn-primary tm-prev-next"
          >Next</a
        >
      </div>
      <div class="tm-paging-wrapper">
        <span class="d-inline-block mr-3">Page</span>
        <nav class="tm-paging-nav d-inline-block">
          <ul>
            <li class="tm-paging-item active">
              <a href="#" class="mb-2 tm-btn tm-paging-link">1</a>
            </li>
            <li class="tm-paging-item">
              <a href="#" class="mb-2 tm-btn tm-paging-link">{{
                total_page
              }}</a>
            </li>
            <li class="tm-paging-item">
              <a href="#" class="mb-2 tm-btn tm-paging-link">3</a>
            </li>
            <li class="tm-paging-item">
              <a href="#" class="mb-2 tm-btn tm-paging-link">4</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>
