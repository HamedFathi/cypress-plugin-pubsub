<template>
  <div>
      <Publisher msg="I'm the publisher"/>
      <hr/>
      <Subscriber msg="I'm the subscriber"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Publisher from './components/Publisher.vue';
import Subscriber from './components/Subscriber.vue';

export default defineComponent({
  name: 'App',
  components: {
    Publisher,
    Subscriber
  }
});
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
