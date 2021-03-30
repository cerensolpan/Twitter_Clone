<script>
export default {
  name: "SearchBox",
};
</script>

<template>
  <div class="search-box">
    <input type="text" class="search-twitter" placeholder="Search Twitter" />
  </div>
</template>

<style scoped>
.search-box {
  background-color: black;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 10px 13px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  position: relative;
  width: 188px;
  height: 40px;
  margin: 5px 0 10px 20px;
}
.search-twitter {
  width: 134px;
  background-color: black;
  outline: none;
  color: white;
  border: none;
}
</style>
