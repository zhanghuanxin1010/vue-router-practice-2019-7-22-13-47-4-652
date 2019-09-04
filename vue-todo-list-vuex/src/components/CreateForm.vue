<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="handleCreateTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
             handleCreateTodo: function () {
            //     this.$store.state.todoList.push({
            //         status: 'active',
            //         content:this.inputtingItem
            //     })
            //this.$store.commit('handleCreateTodo',this.inputtingItem)
             this.$store.dispatch('creattodos')
             }
            
        }
    }
</script>

<style scoped>

</style>
