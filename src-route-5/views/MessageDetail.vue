<template>
  <ul>
    <li>id:{{mesDetail.id}}</li>
    <li>title:{{mesDetail.title}}</li>
    <li>content:{{mesDetail.content}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        mesDetail:{}
      }
    },
    mounted(){
      setTimeout(() => {
        const allMesDetails = [
          {
            id:'001',
            title:'message001',
            content:'message001...'
          },
          {
            id:'003',
            title:'message003',
            content:'message003...'
          },
          {
            id:'006',
            title:'message006',
            content:'message006...'
          },
        ]
        this.allMesDetails = allMesDetails
        const id = this.$route.params.id
        this.mesDetail = allMesDetails.find(detail => detail.id === id)
      }, 1000);
    },
    watch:{
      $route:function(value){
        const id = value.params.id
        this.mesDetail = this.allMesDetails.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>