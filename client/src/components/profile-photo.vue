<script>
export default {
  name: "ProfilePhoto",
};
</script>

<template>
  <div class="profile-photo">
    <img :src="`https://picsum.photos/300/200?random`" alt="" />
  </div>
</template>

<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
</style>
