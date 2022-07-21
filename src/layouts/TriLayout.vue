<script setup lang="ts">

import Topsearch from './structures/Topsearch.vue';
import Footer from './structures/Footer.vue';
import Sidenav from './structures/Sidenav.vue';

</script>
<template>
    <div>
        <Sidenav/>
    </div>    
    <div class="container-fluid">
        <main class="tm-main">
            <Topsearch/>
            <slot />
        </main>
    </div>
    <Footer/>
</template>