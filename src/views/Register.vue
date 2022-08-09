<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/";
import { Form } from "vee-validate";

const requesting = ref(false);
//get store

const auth = useAuthStore();

const regData = reactive({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
});

const registerUser = async (data: any) => {
  requesting.value = true;
  await auth.registerUser(data);
  requesting.value = false;
};
</script>

<template>
  <div>
    <h5>lickle-blog <i class="fa fa-caret-right"> Register</i></h5>
  </div>

  <section class="pt-9">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="card">
        <div class="card-body">
          <span class="text-center"><h1>Register</h1></span>
          <Form
            method="post"
            @submit="registerUser(regData)"
            v-slot="{ isSubmitting }"
          >
            <div class="container">
              <label for="email"><b>Name</b></label>
              <input
                type="text"
                placeholder="Enter Full Name"
                v-model="regData.name"
                required
              />

              <label for="email"><b>Email</b></label>
              <input
                type="text"
                placeholder="Enter Email"
                v-model="regData.email"
                required
              />

              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                v-model="regData.password"
                required
              />

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input
                type="password"
                placeholder="Repeat Password"
                v-model="regData.confirm_password"
                required
              />
              <!-- <span v-if="auth.hasError" class="alert alert-danger mt-3 mb-0">{{ auth.errMsg }}</span>
        <span v-if="auth.success" class="alert alert-success mt-3 mb-0">{{ auth.successMsg }}</span> -->

              <hr />

              <p>
                By creating an account you agree to our
                <a href="#">Terms & Privacy</a>.
              </p>
              <button
                :disabled="isSubmitting"
                type="submit"
                class="registerbtn"
              >
                <span
                  v-show="isSubmitting"
                  class="spinner-border spinner-border-sm mr-1"
                ></span>
                Register
              </button>
            </div>

            <div class="container signin">
              <p>
                Already have an account?
                <router-link to="/login">Login</router-link>.
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
