import axios from "axios";
import { ref } from "vue";

const posts = ref();
const hasError = ref(false);
const getData = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/posts`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    posts.value = res.data;
  } catch (e: any) {
    hasError.value = e.response.data;
  }
  // if(!response){
  //   `<div> error in getting data </div>`;
  // }
};

getData();
export default posts;
