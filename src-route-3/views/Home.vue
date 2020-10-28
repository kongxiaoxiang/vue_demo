<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <!-- <li>
                <a href="#/home/news" class="router-link-exact-active router-link-active">News</a>
              </li>
               <li><a href="#/home/message" class="">Message</a></li>  -->
        <router-link to="/home/News">News</router-link>
        <router-link to="message">Message</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>