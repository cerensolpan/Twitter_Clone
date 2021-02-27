<script>

export default {
  name: "NavBar",
};
</script>

<template lang="pug">
    <div class="navbar">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/">Explore</router-link>
        <router-link class="link" to="/">Notifications</router-link>
        <router-link class="link" to="/">Messages</router-link>
        <router-link class="link" to="/">Bookmarks</router-link>
        <router-link class="link" to="/">Lists</router-link>
        <router-link class="link" to="/">Profile</router-link>
        <router-link class="link" to="/">More</router-link>
    </div>
</template>

<style scoped>
.navbar {
  cursor: pointer;
  background: transparent;
  color: #000;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 120ms;
  text-decoration: none;
  flex-direction: column;
  
}

.link {
  color: #000;
  text-decoration: none;
}

.link:hover{
  color: rgba(29, 161, 242, 1);
  background-color: rgba(29, 161, 242, 0.1);
}
</style>
