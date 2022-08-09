<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/index";
import type { LoginUser } from "@/interface";
//get store
// const data = useShoppingStore();
const authStore = useAuthStore();

const log = reactive<LoginUser>({
  email: "",
  password: "",
});

const logUser = async (data: LoginUser) => {
  return await authStore.login(data);
};
</script>

<template>
  <div>
    <h5>lickle-blog <i class="fa fa-caret-right"> Login</i></h5>
  </div>
  <section class="pt-9">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="card">
        <div class="card-body">
          <span class="text-center"><h1>Login</h1></span>
          <span class="text-center"><h6>Welcome-back please login</h6></span>

          <Form @submit="logUser(log)" method="post" v-slot="{ isSubmitting }">
            <div class="container">
              <label for="email"><b>Email</b></label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                v-model="log.email"
                required
              />

              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                v-model="log.password"
                required
              />
              <hr />

              <button
                :disabled="isSubmitting"
                type="submit"
                class="registerbtn"
              >
                <span
                  v-show="isSubmitting"
                  class="spinner-border spinner-border-sm mr-1"
                ></span>
                Login
              </button>
            </div>

            <div class="container signin">
              <p>
                Don't have an account?
                <router-link to="/register">Register</router-link>.
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #161625;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
