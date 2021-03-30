<script>
export default {
  name: "TweetButton",
  props: ["svgName"],
  methods: {
    getSvgUrl(svgName) {
      return require("../assets/" + svgName + ".svg");
    },
  },
};
</script>

<template>
  <button class="tweet-button">
    <img class="svg" :src="getSvgUrl(svgName)" />
  </button>
</template>

<style scoped>
.tweet-button {
  background-color: black;
  border-radius: 53px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: left;
  border: black;
}
.tweet-button:hover {
  background-color: rgba(29, 161, 242, 1);
}

.title {
  color: white;
  margin: 0px;
}
</style>
