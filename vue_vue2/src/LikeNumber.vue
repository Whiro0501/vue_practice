<template>
<div>
  <p>いいね{{ number }}</p>
  <button @click="countUp">button</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      number: 5,
    };
  },
    methods:  {
      countUp(){
        this.number += 1;
      }
    },
};
</script>