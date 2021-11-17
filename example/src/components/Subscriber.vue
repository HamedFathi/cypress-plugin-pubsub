<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="notification" data-cy="notificationcountlabel">
      Notfication Counter:
        <span data-cy="notficationcounter">{{ notificationCount }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import PubSub from 'pubsub-js';

export default defineComponent({
  name: 'Subscriber',
  props: {
    msg: String,
  },
  setup() {
    const notificationCount = ref(0);

    PubSub.subscribe(
      'notification-update',
      (message: string, data: number) => {
        console.log('notification received.');
        console.log(data);
        notificationCount.value += data;
      },
    );

    return {
      notificationCount,
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
