<script>
import WidgetHeader from "./widget-header.vue";
import TrendingItem from "./trending-item.vue";

export default {
  name: "TrendingList",
  components: { WidgetHeader, TrendingItem },
};
</script>

<template>
  <div class="trending-list">
    <WidgetHeader class="widget-header" />
    <TrendingItem class="widget-header" />
    <TrendingItem class="widget-header" />
    <TrendingItem class="widget-header" />
    <TrendingItem class="widget-header" />
    <TrendingItem class="widget-header" />
    <div class="frame-5">
      <p class="show-more">Show More</p>
    </div>
  </div>
</template>

<style scoped>
.trending-list {
  background-color: black;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  /* width: 262px; */
  height: 481px;
  margin: 0 20px 0 20px;
}
.widget-header {
  align-self: stretch;
}
.frame-5 {
  border-radius: 0 0 0 14px;
  padding: 15px;
  display: flex;
  align-items: center;
}
.show-more {
  color: grey;
}
</style>
