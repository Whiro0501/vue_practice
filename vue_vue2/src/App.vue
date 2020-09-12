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
        v-model="eventData.title"
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

      <input
        type="checkbox"
        name=""
        id="isPrivate"
        v-model="eventData.isPrivate"
      />
      <label for="isPivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>

      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">30代</label>

      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="paid">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>
      <p>開催場所</p>
      <select v-model="eventData.place" >
        <option v-for="value in eventData.location" :key="value"
          >{{ value }}
        </option>
      </select>
      <p>{{ eventData.place}}</p>
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
        target: [],
        price: [],
        location: ['東京', '大阪', '名古屋'],
        place: ""
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
