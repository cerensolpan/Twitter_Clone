<script>
export default {
  name: "MenuButtonNormal",
  props: ["title", "svgName"],
  components: {},
  data: function() {
    return {
      isActive: false,
    };
  },

  methods: {
    getSvgUrl(svgName) {
      return require("../assets/" + svgName + ".svg");
    },
    getClass() {
      let routeName = this.$route.name;
      if (routeName === this.title) this.isActive = true;
      return {
        active: this.isActive,
        passive: !this.isActive,
      };
    },
  },
};
</script>

<template>
  <div>
    <a
      class="menu-button-normal"
      :href="'/' + svgName"
      v-bind:class="getClass()"
    >
      <img class="svg" :src="getSvgUrl(svgName)" />
      <p class="title">{{ title }}</p>
    </a>
  </div>
</template>

<style scoped>
.menu-button-normal {
  border-radius: 53px;
  padding: 8px 19px 8px 10px;
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  margin: 2px;
}
.active {
  background-color: rgba(29, 161, 242, 1);
}
.passive {
  background-color: black;
}
a:hover {
  background-color: rgba(29, 161, 242, 1);
}
.title {
  color: rgb(217, 217, 217);
  margin: 0px;
  margin-left: 10px;
}
</style>
