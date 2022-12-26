<template>
  <el-row id="app">
    <HelloWorld :msg="msg"/>
    <button v-on:click="call">click</button>
  </el-row>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// const {call,add1} =require ('./function')

export default {
  name: 'App',
  data(){
    return{
     msg:'  YOUTUBE DOWNLOADER',
    }
  },
  methods:{
    call(){
      console.log('yes')
    }
  // call(){call()},
  // add(){
  //   console.log(typeof(this.a))
  //   this.addNumber=add1(Number(this.a),Number(this.b))
  // }

  },
  components: {
HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.youtube{
  height:150px;
  width: 300px;
  margin-right: 800px;
}
</style>
