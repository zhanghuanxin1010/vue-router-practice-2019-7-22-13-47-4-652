import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/my/Welcome.vue'
import WelcomeName from '../components/my/WelcomeName.vue'
import ToDoList from '../ToDoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeName',
      component: WelcomeName
    },
    {
      path: '/Welcome/:name',
      props: true,
      name: 'Welcome',
      component: Welcome,
      children: [
        {
          path: 'TodoList',
          name: 'TodoList',
          component: TodoList
        }]
    },
    {
      path: '/TodoList',
      component: TodoList
    },
    {
      path: '/todoList',
      redirect: '/'
    }

  ]
})
