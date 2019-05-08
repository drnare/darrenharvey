<template>
  <div id="app">
    <div class="dh-content">
      <transition name="dh-transition__route" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
    <Bubbles :class="route.name"></Bubbles>
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";

export default {
  name: "App",
  components: {
    Bubbles
  },
  computed: {
    route() {
      return this.$route;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_variables";
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  font-family: sans-serif;
  font-family: map-get($fonts, "body");
  font-size: map-get($font-sizes, "m");
  color: map-get($colors, "black");
}

h1,
h2,
h3,
h4 {
  font-family: map-get($fonts, "title");
}

a {
  display: inline-block;
  border-bottom: 1px solid map-get($colors, "black");
  color: inherit;
  text-decoration: none;
}

p {
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}


.router-link-active {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

#app {
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
}
.dh-content {
  flex: 1;
  padding: map-get($geo, "m") 0;
}

.dh-transition {
  &__route {
    &-enter {
      &-active {
        transition: all 0.3s;
        transform: translateY(-100px);
        opacity: 0;
      }
      &-to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    &-leave {
      &-active {
        transition: all 0.3s;
        transform: translateY(0);
        opacity: 1;
      }
      &-to {
        transform: translateY(-100px);
        opacity: 0;
      }
    }
  }
}
</style>
