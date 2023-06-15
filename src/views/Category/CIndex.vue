<script setup lang="ts">
import { findAllCategory, type Category, removeCategory } from '@/services/category.service'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
import {useToast} from 'vue-toast-notification';

const router = useRouter();
const toast = useToast();

const state = reactive({
  category: [] as Category[],
  totalRecord: 0
})

const getData = async () => {
  try {
    const respone = await findAllCategory()
    //console.log(respone.data);
    state.category = respone.data.data
    state.totalRecord = respone.data.totalRecord
  } catch (error) {
    console.log(error)
  }
}

const onRemove = async (id:number)=>{
   
    const isConfirm = window.confirm("แน่ใจว่าต้องกรลบข้อมูลนี้");
    if(isConfirm){
        const respone = await removeCategory(id);
        if(respone.status==204){
            // alert("ลบข้อมูลสำเร็จ");
            toast.success("ลบข้อมูลสำเร็จ",{
            dismissible:true,
            duration:3000,
        });
         setTimeout(()=>router.go(0),2000);  //reload page
            //router.push("/dashbord");
        }
    }
};

//Compiler จะทำงานส่วนนี้หนึ่งครั้ง
onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <h1 v-if="state.totalRecord >= 0">ประเภทสินค้าทั้งหมด {{ state.totalRecord }} รายการ</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">ประเภทสินค้า</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="item in state.category" :key="item.categoryId">
    
          <td>{{item.categoryId}}</td>
          <td>{{item.categoryName}}</td>
        
          <td>
            <a  href="#" @click.prevent="onRemove(item.categoryId)">ลบ</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
