<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <Header :addItem='addItem'/>
    <List :todos='todos'/>
    <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  export default {
    data(){
      return {
        todos:[
          {title:'eat',complete:false},
          {title:'sleeping',complete:false},
          {title:'lol',complete:true}
        ]
      }
    },
    components:{
      Header,
      List,
      Footer
    },
    methods:{
      addItem(todo){
        this.todos.unshift(todo)
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