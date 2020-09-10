<template>
  <div>
    <p>いいね{{ number1/ 2 }}</p>
    <button @click="countUp">button</button>
  </div>
</template>

<script>
export default {
  props: ['number1'],
  methods: {
    countUp() {
      this.number += 1;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
