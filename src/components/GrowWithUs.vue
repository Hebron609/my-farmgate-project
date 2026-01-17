<template>
   <!--Grow-with-us-section-->
 <section
 class="max-w-[1440px] mx-auto py-20 font-montserrat px-4 sm:px-6 lg:px-8"
>
 <div class="mx-2">
   <div class="relative">
     <img
       :src="farmPic9"
       class="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover rounded-xl brightness-60"
       alt=""
     />

     <div
       class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
     >
       <p
         class="max-w-[90%] sm:max-w-[500px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
       >
         Grow something great together.
       </p>

       <p
         class="text-white max-w-[90%] sm:max-w-[490px] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 mt-2"
       >
         Whether you’re a farmer, distributor, or partner, we’re here to
         support your goals with sustainable solutions and global
         expertise.
       </p>

       <a
         href="/marketplace.html"
         class="md:flex group relative overflow-hidden p-3 sm:p-4 lg:p-3 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-xs sm:text-sm md:text-base"
       >
         <span
           class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
         >
           <LeafIcon class="text-white" />
           <span class="text-xs sm:text-sm md:text-base">Marketplace</span>
         </span>
         <span
           class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
         >
           <LeafIcon class="text-black" />
           <span class="text-xs font-semibold sm:text-sm md:text-base"
             >Marketplace</span
           >
         </span>
       </a>
     </div>
   </div>
 </div>
</section>
</template>

<script setup>
import farmPic9 from '@/assets/img/farm-pic9.jpg';
</script>