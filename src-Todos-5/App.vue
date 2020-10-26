<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addItem='addItem'/> -->
      <Header ref="header" />
      <List :todos="todos" />
      <!-- <Footer :deleteComTask='deleteComTask' :todos='todos' :checkTodo='checkTodo'/> -->
      <Footer>
        <input type="checkbox" v-model="isCheckAll" slot="isCheck" />
        <span slot="count">已完成{{ completeTask }} / 全部{{
          todos.length
        }}</span>
        <button
          class="btn btn-danger"
          @click="deleteComTask"
          v-show="completeTask"
          slot="delTask"
        >
          清除已完成任务
        </button>
      </Footer>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import storageUtil from './util/storageUtil'
export default {
  data() {
    return {
      //读
      todos: storageUtil.readTodos()
    };
  },
  components: {
    Header,
    List,
    Footer,
  },
  mounted() {
    //执行异步代码
    this.$refs.header.$on("addItem", this.addItem);
    PubSub.subscribe("deleteItem", (msg, index) => {
      this.deleteItem(index);
    });
  },
  computed: {
    completeTask() {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0);
    },
    isCheckAll: {
      get() {
        return this.completeTask === this.todos.length && this.todos.length > 0;
      },
      set(value) {
        this.checkTodo(value);
      },
    },
  },
  watch: {
    todos: {
      deep: true, //深度监视
      // handler: function (value) {
      //   //存
      //   storageUtil.saveTodos(value)
      // },
      handler:storageUtil.saveTodos
    },
  },
  methods: {
    addItem(todo) {
      this.todos.unshift(todo);
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    deleteComTask() {
      this.todos = this.todos.filter((todo) => !todo.complete);
    },
    checkTodo(isCheck) {
      this.todos.forEach((todo) => (todo.complete = isCheck));
    },
  },
};
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