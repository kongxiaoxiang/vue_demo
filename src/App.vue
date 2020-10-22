<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <Header :addItem='addItem'/>
    <List :todos='todos' :deleteItem='deleteItem'/>
    <Footer :deleteComTask='deleteComTask' :todos='todos' :checkTodo='checkTodo'/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  export default {
    data(){
      return { //读
        todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    components:{
      Header,
      List,
      Footer
    },
    watch:{
      todos:{  
        deep:true,  //深度监视
        handler:function(value){ //存
          window.localStorage.setItem('todos_key',JSON.stringify(value))
        }
      }
    },
    methods:{
      addItem(todo){
        this.todos.unshift(todo)
      },
      deleteItem(index){
        this.todos.splice(index,1)
      },
      deleteComTask(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      checkTodo(isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>