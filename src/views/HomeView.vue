<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable no-unused-labels -->
<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import { getData } from "@/postsApi";
import { usePostStore } from "@/stores";
import { getSearch } from "@/utility";
import { computed, onMounted, reactive, ref } from "vue";
const data = usePostStore();

const page = reactive({
  count: 1,
  currentPage: 1,
});
const paginate = () => {
  page.currentPage++;
  return getData("", page.currentPage);
};

const {searcher} = getSearch();
console.log("pp",searcher)

</script>

<template>
  <main>
    <div>
      <h5>lickle-blog <i class="fa fa-caret-right">Home</i></h5>
    </div>
    <div class="row tm-row">
      <div class="col-md-4 pl-4">
        <hr />
        
      </div>
      <PostCard
        v-for="post in data.posts"
        :data="post"
        :key="post._id"
        @item-clicked="$router.push({ name: 'Post', params: { id: post._id } })"
      />
    </div>
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
              <a href="#" class="mb-2 tm-btn tm-paging-link">2</a>
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

<style>
hr {
  border-top: 5px solid rgb(8, 22, 70);
}
</style>
<!-- <PhoneCard v-for="phone in data.products" :data="phone" :key="phone._id" />  -->
