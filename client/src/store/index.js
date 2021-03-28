import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
    tweet: {},
    newTweet: '',
  },
  mutations: {
    SET_TWEETS(state, data) {
      state.tweets = data;
    },
    SET_TWEET(state, data) {
      state.tweet = data;
    },
    SET_NEWTWEET(state, data) {
      state.tweets.unshift(data);
    },
  },
  actions: {
    async addTweet({
      commit
    }, tweet) {

      await axios.post(`${process.env.VUE_APP_API_URL}/tweet/add`, tweet)
        .then(res => commit("SET_NEWTWEET", res.data))
        .catch((err) => console.log(err));
    },
  },
  modules: {}
})