<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      errors: {},
    };
  },

  computed: {
    ...mapState(["user"]),
  },

  watch: {
    errors: function(newErr, oldErr) {
      if (this.errors != "") {
        this.showAlert();
      }
    },
    user: function(newUser, oldUser) {
      if (this.user) {
        this.$session.start();
        this.$session.set("twittervue", JSON.stringify(this.user));
        this.$router.push("/home");
      }
    },
  },
  methods: {
    ...mapActions(["resetError", "login"]),

    setLogin() {
      if (this.input.username.trim() === "") {
        this.errors.username = "A username and password must be present";
        console.log("A username and password must be present");
      } else if (this.input.password.trim() === "") {
        this.errors.password = "A username and password must be present";
        console.log("A username and password must be present");
      } else {
        let input = {
          username: this.input.username,
          password: this.input.password,
        };
        this.login(input);
      }
    },
    showAlert() {
      this.errors;
      this.resetError();
    },
  },
};
</script>

<template>
  <div id="login">
    <h4>Twitter'a giriş yap</h4>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Kullanıcı adı"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Şifre"
    />
    <button
      type="button"
      v-on:click="
        setLogin();
        showAlert();
      "
    >
      Giriş yap
    </button>
    <h3 v-if="this.errors != '{}'"></h3>
    {{ errors }}
  </div>
</template>

<style scoped>
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
#login {
  display: block;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
}
</style>
