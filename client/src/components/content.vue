<script>
import Tweet from "./tweet.vue";
import TweetEditor from "./tweet-editor.vue";
export default {
  name: "Content",
  components: { Tweet, TweetEditor },
};
</script>

<template lang="html">
  <div>
    <TweetEditor />
    <Tweet />
  </div>
</template>

<style scoped>
img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
