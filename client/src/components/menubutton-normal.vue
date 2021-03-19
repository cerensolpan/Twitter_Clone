<script>
export default {
  name: "MenuButtonNormal",
  props: ["title", "svgName"],
  methods: {
    getSvgUrl(svgName) {
      return require("../assets/" + svgName + ".svg");
    },
    data() {
      return {
        svgName: "",
      };
    },
  },
};
</script>

<template>
  <a class="menu-button-normal" :href="'/' + svgName">
    <img class="svg" :src="getSvgUrl(svgName)" />
    <p class="title">{{ title }}</p>
  </a>
</template>

<style scoped>
.menu-button-normal {
  background-color: black;
  border-radius: 53px;
  padding: 10px 19px 11px 10px;
  display: flex;
  align-items: center;
  text-align: left;
}

.svg {
  margin-right: 10px;
}

.title {
  color: white;
  margin: 0px;
}
</style>
