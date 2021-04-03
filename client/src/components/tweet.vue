<script>
import ProfilePhoto from "./profile-photo.vue";
import TweetImage from "./tweet-image.vue";
import TweetButton from "./tweet-button.vue";

export default {
  name: "Tweet",
  components: { ProfilePhoto, TweetButton },
  props: ["tweet"],
};
</script>

<template>
  <div class="tweet">
    <div class="tweet-container">
      <ProfilePhoto class="profile-photo" />
      <div class="tweet-body">
        <div class="tweet-default">
          <div class="tweet-header">
            <div>
              {{ tweet.userid.username }} @{{ tweet.userid.nickname }}
              {{ tweet.date }}
            </div>
            <div>{{ tweet.body }}</div>
          </div>
        </div>
        <div class="tweet-footer">
          <TweetButton class="tweet-button" svgName="reply" />
          <TweetButton class="tweet-button" svgName="retweet" />
          <TweetButton class="tweet-button" svgName="like" />
          <TweetButton class="tweet-button" svgName="share" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid gray;
}
.tweet-container {
  padding: 10px 15px;
  display: flex;
  align-items: flex-start;
}
.profile-photo {
  margin-right: 10px;
  height: 49px;
}
.tweet-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tweet-default {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tweet-header {
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: grey;
}
.tweet-footer {
  padding: 0 73px 0 0;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
}
</style>
