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
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    if (!this.user.username) {
      const userData = this.$session.get("twittervue");
      console.log({ userData });
      this.fetchUser(JSON.parse(userData));
    }
  },
};
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn">
      <ProfilePhoto class="profile-photo" />
      <div class="body">
        <p class="name">{{ user.username }} @{{ user.nickname }}</p>
      </div>
    </button>
    <div class="dropdown-content">
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
.dropbtn {
  background-color: black;
  border-radius: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
}

/* .dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
} */

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: grey;
}

.profile-photo {
  margin-right: 11px;
}
.body {
  margin-right: 76px;
  padding: 0 0 17px;
  position: relative;
}
.name {
  color: white;
  position: relative;
}
.slug {
  color: gray;
  position: absolute;
  left: 0;
  top: 17px;
}
</style>
