<template>
  <div>
    <Add/>
    <List :comments='comments'/>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data(){
      return {
        comments:[
          {name:'xiaozhang',content:'vue is good'},
          {name:'xiaoxiang',content:'vue is easy'},
          {name:'xiaozhao',content:'vue just so so'}
        ]
      }
    },
    components:{
      Add,
      List
    }
  }
</script>

<style>

</style>