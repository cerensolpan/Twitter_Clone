<template>
  <div class="explore"></div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar.vue";
import SideBar from "@/components/sidebar.vue";

export default {
  name: "Explore",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<template lang="html">
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col class="first-column">
          <NavBar />
        </b-col>
        <b-col class="second-column"> </b-col>
        <b-col class="third-column">
          <SideBar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.first-column {
  width: 25%;
}
.second-column {
  width: 50%;
}
.third-column {
  width: 25%;
}
</style>
