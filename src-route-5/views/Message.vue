<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{ message.title }}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: [],
      };
    },
    mounted() {
      setTimeout(() => {
        const messages = [
          {
            id: "001",
            title: "message001",
          },
          {
            id: "003",
            title: "message003",
          },
          {
            id: "006",
            title: "message006",
          },
        ];
        this.messages = messages;
      }, 1000);
    },
    methods:{
      pushShow(id){
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  };
</script>

<style>
</style>