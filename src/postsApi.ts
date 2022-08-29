/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { reactive, ref } from "vue";
import { usePostStore } from "./stores";

const posts = ref([]);
const hasError = ref(false);

// const postStore = usePostStore();

// const see = postStore.author

// const filters = reactive({
//   s: "",
//   page: 1,
// });

export const getData = async (search?: any, page?: any) => {
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
  } catch (e: any) {
    hasError.value = e.response.data;
  }
  // if(!response){
  //   `<div> error in getting data </div>`;
  // }
};
getData();

export default posts;
