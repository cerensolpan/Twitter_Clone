<script>
import TweetButton from "./tweet-button.vue";
import Button from "./button.vue";
import ProfilePhoto from "./profile-photo.vue";

export default {
  name: "TweetEditor",
  components: { TweetButton, ProfilePhoto, Button },
  data() {
    return {
      currentValue: "",
      inputHeight: "0",
    };
  },
  watch: {
    currentValue() {
      this.resize();
      this.$emit("input", this.currentValue);
    },
  },
  computed: {
    inputStyle() {
      return {
        "min-height": this.inputHeight,
      };
    },
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      this.inputHeight = `${this.$refs.input.scrollHeight}px`;
    },
  },
};
</script>

<template>
  <div class="tweet-editor">
    <div class="flex-wrapper-one">
      <ProfilePhoto />
      <textarea
        v-model="currentValue"
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
        <Button class="button" />
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>

<style scoped>
.tweet-editor {
  background-color: black;
  padding: 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-wrapper-one {
  margin-bottom: 21px;
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 553px;
}
.placeholder {
  width: 516px;
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
  width: 467px;
}
.meta {
  display: flex;
  align-items: center;
}
.button {
  display: flex;
  height: 39px;
  margin-right: 30px;
  position: absolute;
  right: 10px;
}
.border {
  width: 600px;
  height: 10px;
  background-color: dark-gray;
}
</style>
