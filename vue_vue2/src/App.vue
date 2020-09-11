<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :number1="number" v-on:my-click="emitNumber"></LikeNumber>
    <LikeNumber :number1="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';

export default {
  data: function() {
    return {
      number: 14,
    };
  },
  components: {
    LikeHeader,
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
</style>
