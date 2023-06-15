<script setup lang="ts">
import { reactive, ref } from 'vue';

 const title = ref("เกี่ยวกับเรา")
//Reactive คือการจัดกลุ่มตัวแปรที่เกี่ยวของกันประกาศเป็นออบเจ็คได้

const myImage = reactive({
  url:"https://via.placeholder.com/300",
  alt:"My Image",
})

 const changeMe = () =>{
  //alert("Hello Vue.js");
  title.value ="about us"
  myImage.url = "https://via.placeholder.com/50"
 }
</script>
<template>
  <div class="about">
    <h1>{{title }}</h1>
    <!--Reactive เวลาเรียกต้องมีbinding.urlหรือตัวแปรreactive-->
    <img :src="myImage.url" :alt="myImage.alt">
    <button @click="changeMe" class="btn btn-primary mx-5">ClickMe!</button>
  </div>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
