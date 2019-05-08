<template>
  <nav role="navigation">
    <ul class="dh-breadcrumbs">
      <li v-if="breadcrumb.length" class="dh-breadcrumbs__item">
        <router-link class="dh-breadcrumbs__link" to="/" title="Return home">
          <Icon shape="home"></Icon>
        </router-link>
      </li>
      <li v-for="(page, index) in breadcrumb" :key="page" class="dh-breadcrumbs__item">
        <router-link
          class="dh-breadcrumbs__link"
          :to="breadcrumb.slice(index, -1).length ? '/' + breadcrumb.slice(index, -1)[0] : $route.path"
          :title="page"
        >{{page}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Breadcrumbs",
  computed: {
    breadcrumb() {
      const path = this.$route.path;
      return path
        .split("/")
        .filter(path => path !== "")
        .map(path => path.replace("-", " "));
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss">
@import "../styles/_variables";
.dh-breadcrumbs {
  list-style: none;
  padding: 0;

  &__item {
    display: inline-block;
    &:after {
      content: "/";
      display: inline-block;
      margin: 0 map-get($geo, "s");
    }
    &:last-of-type {
      &:after {
        display: none;
      }
    }
  }

  &__link {
    color: map-get($colors, "black");
    text-decoration: none;
    border: none;
  }
}
</style>
