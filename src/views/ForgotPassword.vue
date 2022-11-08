<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/index";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import axios from "axios";
import router from "@/router";
import type { PasswordReset } from "@/interface";

//get store
// const checkEmail = localStorage.getItem("reset");
// const log = reactive<PasswordReset>({
//   email: "",
// });
// const log2 = reactive<PasswordReset>({
//  email: checkEmail,
//   otp: "",
// });

// const log3 = reactive<PasswordReset>({
//   email: checkEmail,
// });

// console.log(checkEmail);
// const clearEmail = () => {
//   localStorage.removeItem("reset");
//   router.go(0);
// };

// const resetPassword = async (email: PasswordReset) => {
//   console.log(email);
//   try {
//     const res = await axios.post(`http://localhost:3000/users/reset`, email);
//     localStorage.setItem("reset", email.email);
//     const response = res.data;
//     createToast(
//       { title: `${response}`, description: "check your email" },
//       {
//         transition: "bounce",
//         type: "success",
//         showIcon: true,
//         hideProgressBar: true,
//         timeout: 5000,
//       }
//     );
//     setTimeout(() => router.go(), 1000);
//   } catch (error: any) {
//     // const { msg } = error.response.data;
//     // this.hasError = true;
//     // this.errMsg = msg;
//   }
// };
// const verifyOtp = async (payload: PasswordReset) => {
//   try {
//     const res = await axios.post(
//       `http://localhost:3000/users/reset/verify`,
//       payload
//     );
//     const response = await res.data.success;
//     const err = await res.data.invalidOtp;
//     if (response) {
//       createToast(
//         { title: `${response}`, description: "you will be redirected" },
//         {
//           transition: "bounce",
//           type: "success",
//           showIcon: true,
//           hideProgressBar: true,
//           timeout: 5000,
//         }
//       );
//       setTimeout(() => router.go(), 1000);
//     }
//     if (err) {
//       createToast(
//         { title: `${err}`, description: "try again" },
//         {
//           transition: "bounce",
//           type: "danger",
//           showIcon: true,
//           hideProgressBar: true,
//           timeout: 5000,
//         }
//       );
//     }

    
//   } catch (error: any) {}
// };
// const resendOtp =() => {
//   resetPassword(log3)
// }
// </script>

// <template>
//   <div>
//     <h5>lickle-blog <i class="fa fa-caret-right"> password reset</i></h5>
//   </div>
//   <section class="pt-9">
//     <div class="container px-4 px-lg-5 mt-5">
//       <div class="card">
//         <div class="card-body">
//           <span v-if="!checkEmail" class="text-center"><h1>Reset password</h1></span>
//           <span v-if="checkEmail" class="text-center"><h1>Verify OTP</h1></span>
//           <span class="text-center"><h6></h6></span>

//           <Form
//             @submit="resetPassword(log)"
//             method="post"
//             v-slot="{ isSubmitting }"
//           >
//             <div class="container">
//               <label v-if="checkEmail" for="user">{{ checkEmail }}</label>
//               <label v-if="!checkEmail" for="email"><b>Email</b></label>
//               <input
//                 v-if="!checkEmail"
//                 type="text"
//                 placeholder="Enter Email"
//                 name="email"
//                 v-model="log.email"
//                 required
//               />
//               <p>
//                 <label v-if="checkEmail" for="otp"><b>OTP</b></label>
//               </p>
//               <input
//                 type="text"
//                 v-if="checkEmail"
//                 placeholder="check email for otp"
//                 name="email"
//                 v-model="log2.otp"
//               />
//               <hr />

//               <button
//                 v-if="!checkEmail"
//                 :disabled="isSubmitting"
//                 type="submit"
//                 class="registerbtn"
//               >
//                 <span
//                   v-show="isSubmitting"
//                   class="spinner-border spinner-border-sm mr-1"
//                 ></span>
//                 Reset Password
//               </button>

             

//               <div v-if="checkEmail" class="container signin">
//                 <p>
//                   Not your Email?
//                   <router-link  @click="clearEmail" to=""
//                     >click here</router-link
//                   >.
//                   <p>
//                   Resend OTP?
//                   <router-link v-if="checkEmail" @click="resendOtp" to=""
//                     >click here</router-link
//                   >.
//                 </p>
//                 </p>
//               </div>
//             </div>
//           </Form>
//           <button
//                 @click="verifyOtp(log2)"
//                 v-if="checkEmail"
          
//                 type="submit"
//                 class="registerbtn"
//               >
//                 Verify OTP
//               </button>
//         </div>
//       </div>
//     </div>
//   </section>
// </template>

// <style>
// * {
//   box-sizing: border-box;
// }

// /* Add padding to containers */
// .container {
//   padding: 16px;
// }

// /* Full-width input fields */
// input[type="text"],
// input[type="password"] {
//   width: 100%;
//   padding: 15px;
//   margin: 5px 0 22px 0;
//   display: inline-block;
//   border: none;
//   background: #f1f1f1;
// }

// input[type="text"]:focus,
// input[type="password"]:focus {
//   background-color: #ddd;
//   outline: none;
// }

// /* Overwrite default styles of hr */
// hr {
//   border: 1px solid #f1f1f1;
//   margin-bottom: 25px;
// }

// /* Set a style for the submit/register button */
// .registerbtn {
//   background-color: #161625;
//   color: white;
//   padding: 16px 20px;
//   margin: 8px 0;
//   border: none;
//   cursor: pointer;
//   width: 100%;
//   opacity: 0.9;
// }

// .registerbtn:hover {
//   opacity: 1;
// }

// /* Add a blue text color to links */
// a {
//   color: dodgerblue;
// }

// /* Set a grey background color and center the text of the "sign in" section */
// .signin {
//   background-color: #f1f1f1;
//   text-align: center;
// }
// </style>
