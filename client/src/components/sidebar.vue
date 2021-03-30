<script>
import SearchBox from "./searchbox.vue";
import WidgetHeader from "./widget-header.vue";
import TrendingList from "./trending-list.vue";

export default {
  name: "SideBar",
  components: { SearchBox, WidgetHeader, TrendingList },
};
</script>

<template>
  <div>
    <SearchBox />
    <TrendingList />
  </div>
</template>

<style scoped></style>
