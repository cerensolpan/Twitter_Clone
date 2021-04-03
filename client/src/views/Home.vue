<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar.vue";
import Content from "@/components/content.vue";
import SideBar from "@/components/sidebar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Content,
    SideBar,
  },
  beforeCreate: function() {
    if (!this.$session.exists() && !this.$session.get("twittervue")) {
      this.$router.push("/login");
    }
  },
};
</script>

<template lang="html">
  <div>
    <div class="base">
      <div class="first-column">
        <NavBar />
      </div>
      <div class="second-column">
        <Content />
      </div>
      <div class="third-column">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.base {
  margin: 0;
  width: 100%;
  display: flex;
  text-align: left;
  background-color: black;
}
.first-column {
  width: 25%;
}
.second-column {
  width: 50%;
}
.third-column {
  width: 25%;
}
/* div {
  background-color: black;
} */
</style>
