<script>
export default {
  name: "NavBar",
};
</script>

<template lang="html">
  <div>
    <i class="fas fa-dove d-flex fa-lg" color="#33AFFF" size="large"></i>
    <div class="d-grid px-0">
      <router-link class="link btn btn-light text-dark rounded-pill " to="/">
        <i class="fas fa-home"></i>Home
      </router-link>
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="fas fa-hashtag"> </i>Explore</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="far fa-bell"></i>Notifications</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="far fa-envelope"></i>Messages</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="far fa-bookmark"></i>Bookmarks</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="far fa-list-alt"></i>Lists</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="fas fa-user-alt"></i>Profile</router-link
      >
      <router-link class="link btn btn-light text-dark rounded-pill " to="/"
        ><i class="fas fa-ellipsis-h"></i>More</router-link
      >
    </div>
  </div>
</template>

<style scoped>
/* .navbar {
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
} */

.link {
  display: flex;
  text-align: left;
}
</style>
