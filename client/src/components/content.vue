<script>
import Tweet from "./tweet.vue";
import TweetEditor from "./tweet-editor.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Content",
  components: { Tweet, TweetEditor },
  methods: {
    ...mapActions(["fetchTweets"]),
  },
  computed: {
    ...mapState(["tweets"]),
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<template lang="html">
  <div>
    <div class="contentHeader">
      <a class="home" :href="'/home'">Home</a>
    </div>
    <div class="contentBody">
      <TweetEditor />
      <div v-for="tweet in tweets" :key="tweet._id">
        <Tweet :tweet="tweet" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentHeader {
  padding: 10px;
  background-color: black;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.home {
  text-decoration: none;
  color: white;
}

.contentBody {
  border: 1px solid gray;
}
</style>
