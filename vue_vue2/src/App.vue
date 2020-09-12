<template>
  <div>
    <LikeHeader headerText="Hello">
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :number1="number" v-on:my-click="emitNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントフォーム</h2>
      <label for="title">タイトル</label>
      <input
        type="text"
        name=""
        id="title"
        v-model.lazy.trim="eventData.title"
      />
      <pre>{{ eventData.title }}</pre>

      <label for="maxNumber">最大人数</label>
      <input
        type="number"
        name=""
        id="maxNumber"
        v-model.lazy="eventData.maxNumber"
      />
      <pre>{{ eventData.maxNumber }}</pre>

      <label for="host">主催者</label>
      <input type="text" name="" id="host" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>
      <label for="detail"></label>
      <textarea
        name=""
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{ eventData.detail }}</pre>

      <input type="checkbox" name="" id="isPrivate"
      v-model="eventData.isPrivate" />
      <label for="isPivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';
import Home from './components/Home';
import About from './components/About';

export default {
  data: function() {
    return {
      number: 14,
      currentComponent: 'Home',
      eventData: {
        title: ' ',
        maxNumber: 0,
        host: '',
        detail: '',
      },
    };
  },
  components: {
    Home,
    About,
    LikeHeader,
  },
  methods: {
    emitNumber: function(value) {
      this.number = value;
    },
  },
};
</script>
