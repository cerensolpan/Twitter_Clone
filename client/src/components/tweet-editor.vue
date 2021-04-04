<script>
import TweetButton from "./tweet-button.vue";
import Button from "./button.vue";
import ProfilePhoto from "./profile-photo.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "TweetEditor",
  components: { TweetButton, ProfilePhoto, Button },
  data() {
    return {
      tweet: "",
      inputHeight: "0",
    };
  },
  watch: {
    currentValue() {
      this.resize();
      this.$emit("input", this.tweet);
    },
  },
  computed: {
    inputStyle() {
      return {
        "min-height": this.inputHeight,
      };
    },
    ...mapState(["user"]),
  },
  mounted() {
    this.resize();
  },
  methods: {
    ...mapActions(["addTweet", "fetchUser"]),
    resize() {
      this.inputHeight = `${this.$refs.input.scrollHeight}px`;
    },
    SendTweet() {
      let newTweet = {
        userid: this.user._id,
        body: this.tweet,
      };
      this.addTweet(newTweet);
      this.tweet = "";
    },
  },
  created() {
    if (!this.user.username) {
      const userData = this.$session.get("twittervue");
      this.fetchUser(JSON.parse(userData));
    }
  },
};
</script>

<template>
  <form @submit.prevent="SendTweet()">
    <div class="tweet-editor">
      <div class="flex-wrapper-one">
        <ProfilePhoto />
        <textarea
          v-model="tweet"
          ref="input"
          :style="inputStyle"
          class="placeholder"
          placeholder="What’s happening?"
        ></textarea>
      </div>
      <div class="flex-wrapper-two">
        <div class="meta">
          <TweetButton class="tweet-button" svgName="media" />
          <TweetButton class="tweet-button" svgName="gif" />
          <TweetButton class="tweet-button" svgName="question" />
          <TweetButton class="tweet-button" svgName="emoji" />
          <Button type="submit" class="button" />
        </div>
      </div>
      <!-- <div class="border"></div> -->
    </div>
  </form>
</template>

<style scoped>
.tweet-editor {
  background-color: black;
  padding: 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid gray;
}
.flex-wrapper-one {
  margin-bottom: 21px;
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  align-self: stretch;
}
.placeholder {
  width: 400px;
  align-self: stretch;
  color: white;
  text-align: left;
  background-color: black;
  border: 0 none white;
  overflow: hidden;
  padding: 10px;
  outline: none;
}
.flex-wrapper-two {
  margin-bottom: 10px;
  padding: 0 0 0 58px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 39px;
}
.meta {
  display: flex;
  align-items: center;
}
.button {
  display: flex;
  height: 39px;
  right: 10px;
}
.border {
  background-color: dark-gray;
}
</style>
