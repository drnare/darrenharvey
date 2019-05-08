<template>
  <span class="dh-icon">
    <svg :class="['icon icon-' + shape, modifier ? modifier : '']"><use :href="'/icomoon/symbol-defs.svg#icon-' + shape"></use></svg>
  </span>
</template>

<script>
export default {
  name: "Icon",
  computed: {
    name() {
      return 'ios-' + this.shape;
    },
  },
  props: {
    modifier: String,
    shape: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "large"
    }
  }
};
</script>

<style lang="scss">
  @import '../styles/_variables';
  .dh-icon {
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: map-get($colors, 'black');
      vertical-align: bottom;
    }
  }
</style>
