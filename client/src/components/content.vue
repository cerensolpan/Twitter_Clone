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
  <div class="contentSide">
    <TweetEditor />
    <div v-for="tweet in tweets" :key="tweet._id">
      <Tweet :tweet="tweet" />
    </div>
  </div>
</template>

<style scoped>
.contentSide {
  border: 1px solid white;
}
</style>
