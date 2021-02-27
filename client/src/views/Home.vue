<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar.vue'
import Content from '@/components/content.vue'
import SideBar from '@/components/sidebar.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Content,
    SideBar
  }
}
</script>

<template lang="pug">
div
  section.navbar
    NavBar
  section.content
    Content
  section.sidebar
    SideBar
</template>

<style scoped>
.navbar {
    width: 25%;
    height: 100%;
    float: left;
}

.content {
    width: 50%;
    height: 100%;
    float: left;
}

.sidebar {
  width: 25%;
  height: 100%;
  position: relative;
  float: right;
}
</style>
