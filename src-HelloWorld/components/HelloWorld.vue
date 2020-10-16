<template>
  <div>
    <p class="test">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg:'Hello World Vue!'
      }
    }
  }
</script>

<style>
  .test{
    color: aquamarine;
    font-size: 40px;
  }
</style>