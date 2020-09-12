<template>
    <div>
        <h2>イベントフォーム</h2>
        <label for="title">タイトル</label>
        <input
            type="text"
            name=""
            id="title"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        />
        <pre>{{ value }}</pre>
        <p>てすと</p>
    </div>
</template>

<script>
export default {
  props: ["value"]
}
</script>
