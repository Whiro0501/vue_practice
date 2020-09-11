<template>
  <div>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ['headerText'],
};
</script>

<style scoped>
h1 {
  border: 1px solid red;
}
</style>
