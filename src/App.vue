<template>
  <Juego></Juego>
  <!-- <HelloWorld></HelloWorld> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Juego from './modules/juego/components/JuegoR.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Juego
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
</style>
