<script>
export default {
  name: "TrendingItem",
  components: {},
};
</script>

<template>
  <div class="trending-item">
    <div class="content">
      <p class="subtitle">Trending in Turkey</p>
      <p class="tag">#meteor</p>
      <p class="count">42K Tweets</p>
    </div>
  </div>
</template>

<style scoped>
.trending-item {
  background-color: rgba(78, 77, 77, 0.4);
  padding: 0 18px 1px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid white;
}
.content {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.subtitle {
  color: gray;
  align-self: stretch;
  margin-bottom: 3px;
}
.tag {
  color: white;
  align-self: stretch;
  margin-bottom: 3px;
}
.count {
  color: gray;
  align-self: stretch;
}
</style>
