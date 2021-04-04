<script>
import ProfilePhoto from "./profile-photo.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "ProfileSettings",
  components: { ProfilePhoto },
  methods: {
    ...mapActions(["fetchUser"]),
    logout: function() {
      this.$session.destroy();
      this.$router.push("/login");
    },
    drop: function() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    if (!this.user.username) {
      const userData = this.$session.get("twittervue");
      this.fetchUser(JSON.parse(userData));
    }
  },
};
</script>

<template>
  <div class="dropdown">
    <button v-on:click="drop" class="dropbtn">
      <ProfilePhoto class="profile-photo" />
      <div class="body">
        <p class="name">{{ user.username }}</p>
        <p class="nickname">@{{ user.nickname }}</p>
      </div>
    </button>
    <div id="myDropdown" class="dropdown-content">
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
.dropbtn {
  background-color: black;
  border-radius: 47px;
  padding: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  /* align-self: stretch; */
  border: none;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: rgb(6, 150, 247);
}

.dropdown {
  position: relative;
  display: inline-block;
  /* display: inline-flexbox; */
  /* padding: 8px 20px 8px 20px; */
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  /* min-width: 160px; */
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  right: 0;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
.name,
.nickname {
  margin: 0;
}
</style>
