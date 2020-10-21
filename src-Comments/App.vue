<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteItem='deleteItem'/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data (){
      return {
        comments:[
          {name:'bob',content:'vue good'},
          {name:'jack',content:'vue easy'},
          {name:'rose',content:'vue so so'},
        ]
      }
    },
    components:{
      Add,
      List
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },
      deleteItem(index){
        this.comments.splice(index,1)
      }
    }
  }
</script>

<style>

</style>