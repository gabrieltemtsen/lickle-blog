<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Search form -->
  <div class="row tm-row">
    <div class="col-12">
      <form  class="form-inline tm-mb-80 tm-search-form">
        <input
          class="form-control tm-search-input"
          name="query"
          type="text"
          @keyup="search"
          v-model="filter.s"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getData } from "@/postsApi";
import { usePostStore } from "@/stores";
import { reactive } from "vue";

const postStore = usePostStore();

const filter = reactive({
  s: "",
});
const search = () => {
  return getData(filter.s);
};
</script>
