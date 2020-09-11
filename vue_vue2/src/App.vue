<template>
  <div>
    <LikeHeader headerText="Hello">
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :number1="number" v-on:my-click="emitNumber"></LikeNumber>
<button @click="currentComponent = 'Home'">Home</button>
<button @click="currentComponent = 'About'">About</button>
<About v-if="currentComponent ==='About'"></About>
<Home v-if="currentComponent === 'Home'"></Home>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';
import Home from './components/Home';
import About from './components/About';

export default {
  data: function() {
    return {
      number: 14,
      currentComponent: "Home"
    };
  },
  components: {
      Home,
      About,
    LikeHeader
  },
  methods: {
    emitNumber: function(value) {
      this.number = value;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}

p {
  color: rebeccapurple;
}
</style>
