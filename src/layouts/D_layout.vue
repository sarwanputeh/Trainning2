<script setup lang="ts">
// import DHeader from './components/Dashbord/DHeader.vue';
// import DSidenav from './components/Dashbord/DSidenav.vue';
// import DFooter from './components/Dashbord/DFooter.vue';
import DFooter from '@/components/Dashbord/DFooter.vue'
import DHeader from '@/components/Dashbord/DHeader.vue'
import DSidenav from '@/components/Dashbord/DSidenav.vue'
// import DSidenav from '@/components/Dashbord/DSidenav.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <DHeader />
  <div id="layoutSidenav">
    <DSidenav />

    <div id="layoutSidenav_content">
      <main>
        <RouterView />
      </main>
 
        <DFooter />
     
    </div>
  </div>

  <!-- <DSidenav/> -->
</template>
