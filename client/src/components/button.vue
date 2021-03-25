<script>
export default {
  name: "Button",
};
</script>

<template>
  <button class="button"><p class="tweet">Tweet</p></button>
</template>

<style scoped>
.button {
  background-color: rgb(6, 150, 247);
  border-radius: 47px;
  padding: 8px 20px 8px 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  align-self: stretch;
  border: none;
}
.tweet {
  color: white;
  margin: 0;
}
</style>
