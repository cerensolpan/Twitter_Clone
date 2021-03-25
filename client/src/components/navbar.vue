<script>
import MenuButtonNormal from "./menubutton-normal.vue";
import Button from "./button.vue";

export default {
  name: "NavBar",
  components: { MenuButtonNormal, Button },
};
</script>

<template lang="html">
  <div class="navBar">
    <menu-button-normal svgName="twitter" class="buttonTwitter" />
    <menu-button-normal svgName="home" title="Home" />
    <menu-button-normal svgName="explore" title="Explore" />
    <menu-button-normal svgName="notification" title="Notification" />
    <menu-button-normal svgName="messages" title="Messages" />
    <menu-button-normal svgName="bookmark" title="Bookmarks" />
    <menu-button-normal svgName="lists" title="Lists" />
    <menu-button-normal svgName="profile" title="Profile" />
    <menu-button-normal svgName="more" title="More" />
    <Button class="button" />
  </div>
</template>

<style scoped>
.navBar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px 0 20px;
}
.buttonTwitter {
  width: 50px;
  height: 50px;
  border-radius: 40px;
}
</style>
