<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <button type="button" @click.prevent="notifyNavbar" data-cy="publisherbutton">
      Click Me to notify the subscriber below!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PubSub from "pubsub-js";

export default defineComponent({
  name: 'Publisher',
  props: {
    msg: String,
  },
  setup() {
    function notifyNavbar() {
      console.log("Sending Notification");
      PubSub.publish('notification-update', 1);
      console.log("Notification Sent");
    }

    return {
      notifyNavbar,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
