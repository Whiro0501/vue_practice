<template>
  <div>
    <LikeHeader headerText="Hello">
      <template #title="">
        <h2>こんにちは</h2>
      </template>
      <template #defalt="">
        <p>first</p>
        <p>はじめまして</p>
      </template>
      <template #number="">
        <p>トータルの良いね数</p>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>

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

p {
  color: rebeccapurple;
}
</style>
