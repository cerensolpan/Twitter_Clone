<script>
import MenuButtonNormal from "./menubutton-normal.vue";

export default {
  name: "NavBar",
  components: { MenuButtonNormal },
};
</script>

<template lang="html">
  <div>
    <menu-button-normal svgName="twitter" />
    <menu-button-normal svgName="home" title="Home" />
    <menu-button-normal svgName="explore" title="Explore" />
    <menu-button-normal svgName="notification" title="Notification" />
    <menu-button-normal svgName="messages" title="Messages" />
    <menu-button-normal svgName="bookmark" title="Bookmarks" />
    <menu-button-normal svgName="lists" title="Lists" />
    <menu-button-normal svgName="profile" title="Profile" />
    <menu-button-normal svgName="more" title="More" />
  </div>
</template>

<style scoped></style>
