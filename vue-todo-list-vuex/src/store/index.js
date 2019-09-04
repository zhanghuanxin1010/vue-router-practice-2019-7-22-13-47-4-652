import axios from "axios";

Vue.use(Router)

export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo: function (state,inputtingItem) {
            state.todoList.push({
                status: 'active',
                content:inputtingItem
            })
        },
        handleToggleActive: function (state,index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter: function (state,currentFilter) {
            state.currentFilter = currentFilter;
        },
        initTodos:function(state,todos){
         state.todoList=todos
        },
        creatTodos:function(state,todos){
            state.todoList=todos
           }


    },
    actions:{
    fetchtodos(context){
        const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
        axios.get(url).then(function(response){
            context.commit('initTodos',response.data);
            // console.log(30)
             console.log(response)
        }
        )
       },
       creattodos(context,content){
        const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
        axios.post(url,{content:content}).then(function(response){
            context.dispatch("fetchtodos")
            //     console.log(35)
                console.log(response)
           })           
       },
       puttodos(context,content){
        const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
        axios.put(url,{
            id:context.id,
            name:context.content          
        }).
        then(function(response){
            context.dispatch("fetchtodos")
            //     console.log(35)
                console.log(response)
           })           
       }

    }
}
