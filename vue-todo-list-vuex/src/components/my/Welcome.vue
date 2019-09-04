<template>
 <div class="welcome">
  <h1> welcome {{name}}</h1> 
       <router-link :to="'/welcome/'+name">GO to welcome </router-link><br>
       <router-link :to="{name:'TodoList'}">GO to todolist</router-link><br>
        <router-link to="/todoList">GO to ToDo</router-link>
         <router-view></router-view>
       
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
  return {
   
  }
 },
 components: {

 },
props:['name']
}
</script>

<style scoped>
</style>
