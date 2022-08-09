<template>
<div><h5>lickle-blog <i class="fa fa-caret-right"></i> Video</h5></div>
     <div class="row tm-row">                                
                <article class="col-12 col-md-6 tm-post">
                    <hr class="tm-hr-primary">
                    <router-link to="/post" class="effect-lily tm-post-link tm-pt-60">
                        <!-- image -->
                        <div class="tm-post-link-inner">
                            <img src="../../assets/img/img-01.jpg" alt="Image" class="img-fluid">                            
                        </div>
                        <!-- title -->
                        <h2 class="tm-pt-30 tm-color-primary tm-post-title">Simple and useful HTML layout</h2>
                    </router-link>
                    <!-- description-->
                    <p class="tm-pt-30">
                        There is a clickable image with beautiful hover effect and active title link for each post item. 
                        Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.
                    </p>
                    <!-- date -->
                    <div class="d-flex justify-content-between tm-pt-45">
                        <span class="tm-color-primary">June 24, 2020</span>
                    </div>
                    <hr>
                    <!-- comments || publisher -->
                    <div class="d-flex justify-content-between">
                        <span>36 comments</span>
                        <span>by Admin Nat</span>
                    </div>
                </article>

               
            </div>
            <div class="row tm-row tm-mt-100 tm-mb-75">
                <div class="tm-prev-next-wrapper">
                    <a href="#" class="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20">Prev</a>
                    <a href="#" class="mb-2 tm-btn tm-btn-primary tm-prev-next">Next</a>
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
</template>
