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
};
</script>

<template lang="html">
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>
          <NavBar />
        </b-col>
        <b-col cols="8">
          <Content />
        </b-col>
        <b-col>
          <SideBar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>
