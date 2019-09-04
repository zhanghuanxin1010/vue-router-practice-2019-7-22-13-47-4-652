<template>
 <div class="welcome">
  <input v-model="name"> </input>
  <button @click="welcome"> 开始</button>
 </div>
</template>
<script >
export default {
 data() {
  return {
     name:""

  }
 },
 components: {

 },
 methods: {
     welcome:function(){
          this.$router.push({ path: "/Welcome/"+this.name });
     }

 }
}
</script>