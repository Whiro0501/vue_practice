<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="countUp">button</button>
  </div>
</template>

<script>
export default {
  props: {
    number1: {
      type: Number,
      required: true,
      default: 10
    }
      },
  methods: {
    countUp() {
      this.$emit("my-click", this.number1 + 1);
    },
  },
  computed: {
    halfNumber(){
      return this.number1 /2 ;
    }  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
