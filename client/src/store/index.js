import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
    tweet: {},
    newTweet: '',
    user: {},
    error: '',
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
    SET_USER(state, data) {
      state.user = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    }
  },
  actions: {

    async fetchTweets({
      commit
    }) {

      const result = await axios.get(`${process.env.VUE_APP_API_URL}/tweet/all`);
      commit("SET_TWEETS", result.data.reverse());
    },

    async fetchTweet({
      commit
    }, id) {
      console.log('fetchTweet');
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/tweet/${id}`);
      commit("SET_TWEET", result.data);
    },

    async addTweet({
      commit
    }, tweet) {

      await axios.post(`${process.env.VUE_APP_API_URL}/tweet/add`, tweet)
        .then(res => commit("SET_NEWTWEET", res.data))
        .catch((err) => console.log(err));
    },

    async fetchUser({
      commit
    }, user) {
      // const result = await axios.get(`${process.env.VUE_APP_API_URL}/user/${id}`);
      commit("SET_USER", user);
    },

    async login({
      commit,
      dispatch
    }, input) {

      const response = await axios.post(`${process.env.VUE_APP_API_URL}/user/login`, input)
        .then(res => res.data)
        .catch((err) => console.log(err));
      commit("SET_USER", response.user);

    },
    async resetError({
      commit
    }) {
      let data = "";
      commit("SET_ERROR", data);
    },
  },
  modules: {}
})