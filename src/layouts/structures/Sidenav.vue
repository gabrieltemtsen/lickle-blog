<script setup lang="ts">
import { ref } from 'vue';

const tmHeader = ref();
 var clicked = true
 const toggler = () => {
    if(clicked){
   tmHeader.value.classList.toggle('show');
    }
   
 }
 const hide = ()=>{
    
 }

</script>
<template>
    <header ref="tmHeader" class="tm-header" id="tm-header">
        <div class="tm-header-wrapper">
            <button  @click="toggler" class="navbar-togglerr" type="button" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="tm-site-header">
                <div class="mb-3 mx-auto tm-site-logo"><i class="fas fa-paperclip fa-2x"></i></div>            
                <h1 class="text-center"><i>lickle blog</i></h1>
            </div>
            <nav class="tm-nav" id="tm-nav">            
                <ul @click="toggler">
                    <li class="tm-nav-item active"><router-link to="/" class="tm-nav-link">
                        <i class="fa fa-home"></i>
                        Home
                    </router-link></li>
                    <li class="tm-nav-item"> <router-link to="/category/education" class="tm-nav-link">
                        <i class="fas fa-book"></i>
                        Education
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/category/music" class="tm-nav-link">
                        <i class="fas fa-music"></i>
                        Music
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/category/video" class="tm-nav-link">
                        <i class="fas fa-play-circle"></i>
                        Videos
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/category/news" class="tm-nav-link">
                        <i class="fas fa-users"></i>
                        News
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/category/sport" class="tm-nav-link">
                        <i class="fas fa-futbol"></i>
                        Sport
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/contact" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Contact Us
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/Login" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Login
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/register" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Register
                    </router-link></li>
                </ul>
            </nav>
            <div class="tm-mb-65">
                <a rel="nofollow" href="https://fb.com/templatemo" class="tm-social-link">
                    <i class="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" class="tm-social-link">
                    <i class="fab fa-twitter tm-social-icon"></i>
                </a>
                <a href="https://instagram.com" class="tm-social-link">
                    <i class="fab fa-instagram tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" class="tm-social-link">
                    <i class="fab fa-linkedin tm-social-icon"></i>
                </a>
            </div>
            
        </div>
    </header>
</template>