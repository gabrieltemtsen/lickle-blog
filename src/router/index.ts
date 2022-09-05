import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EducationView from "@/views/EducationView.vue";
import MusicView from "@/views/MusicView.vue";
import SportView from "@/views/SportView.vue";
import ContactView from "@/views/ContactView.vue";
import PostView from "@/views/PostView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import CreatePostViewVue from "@/views/CreatePostView.vue";
import ForgotPasswordVue from "@/views/ForgotPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category/education",
      name: "education",
      component: EducationView,
    },
    {
      path: "/category/music",
      name: "Music",
      component: MusicView,
    },
    {
      path: "/category/sport",
      name: "Sport",
      component: SportView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/post/:id",
      name: "Post",
      component: PostView,
      props: true,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/createpost",
      name: "CreatePost",
      component: CreatePostViewVue,
    },
    {
      path: "/resetpassword",
      name: "ResetPassword",
      component: ForgotPasswordVue,
    },
  ],
});

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register', '/','/cart'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth: any = useAuthStore();

//   if (authRequired && !auth.token) {
//       auth.returnUrl = to.fullPath;
//       return '/login';
//   }
// });

export default router;
