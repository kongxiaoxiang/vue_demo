<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{ message.title }}</router-link>
      </li>
    </ul>
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
  };
</script>

<style>
</style>