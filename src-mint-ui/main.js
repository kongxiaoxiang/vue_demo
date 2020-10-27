import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

//注册全局组件
Vue.component(Button.name, Button)

new Vue({
  el:"#app",
  components:{App},
  template:'<App/>'
})