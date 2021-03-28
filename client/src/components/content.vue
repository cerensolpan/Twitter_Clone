<script>
import Tweet from "./tweet.vue";
import TweetEditor from "./tweet-editor.vue";
export default {
  name: "Content",
  components: { Tweet, TweetEditor },
};
</script>

<template lang="html">
  <div class="contentSide">
    <TweetEditor />
    <Tweet />
  </div>
</template>

<style scoped>
.contentSide {
  border: 1px solid white;
}
</style>
