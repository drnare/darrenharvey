<template>
  <router-link v-if="to" :to="to" :title="title" :class="`dh-button ${computedModifier}`">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  computed: {
    computedModifier() {
      return `dh-button--${this.modifier}`;
    },
  },
  props: {
    modifier: String,
    to: String,
    title: String,
  }
};
</script>

<style lang="scss">
@import "../styles/_variables";
.dh-button {
  display: inline-block;
  border: 0;
  border-radius: map-get($geo, 'l');
  min-width: 5rem;
  padding: map-get($geo, 'm');
  box-shadow: 0 0 0 none;
  text-align: center;
  text-decoration: none;

  &--primary {
    background: map-get($colors, 'primary');
    color: map-get($colors, 'white');
    transition: all .3s;
    &:hover {
      box-shadow: 0 0 map-get($geo, 'm') transparentize(map-get($colors, 'primary'), 0.5);
    }
  }
}
</style>
