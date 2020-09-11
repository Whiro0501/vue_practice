<template>
  <div>
    <slot name="title"> </slot>
  <slot name=default></slot>
    <hr>

    <p>いいねの数</p>
    <slot name=number></slot>
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
