<template>
  <li @mouseenter="handle(true)" @mouseleave="handle(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display: none" v-show="isShow" @click="del">删除</button>
  </li>
</template>

<script>
  export default {
    data(){
      return {
        bgColor:'white',
        isShow:false
      }
    },
    props:{
      todo:Object,
      deleteItem:Function,
      index:Number
    },
    methods:{
      handle(isEnter){
        if(isEnter){
          this.bgColor = 'gray',
          this.isShow =true
        }else{
          this.bgColor = 'white',
          this.isShow = false
        }
      },
      del(){
        const {todo,deleteItem,index} = this
        if(window.confirm(`are you sure splice ${todo.title}`)){
          deleteItem(index)
        }
      }
    }
  };
</script>

<style>
/*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>