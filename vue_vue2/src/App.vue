<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :number1="number"></LikeNumber>
    <LikeNumber :number1="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';

export default {
  data: function(){
    return {
      number: 10
    };
  },
  components: {
    LikeHeader,
  }
  
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
