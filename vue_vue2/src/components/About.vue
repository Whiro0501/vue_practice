<template>
<div>
<p>About</p>
<input type="text">
</div>
</template>

<script>
export default {
  destroyed() {
    console.log('dest');
  },
  deactivated() {
    console.log('deac');
  },
  activated() {
    console.log('act');
  },
}
</script>