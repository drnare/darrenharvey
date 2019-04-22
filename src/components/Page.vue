<template>
  <article class="dh-page">
    <header class="dh-page__header">
      <router-link v-if="!subtitle" to="/">
        <Icon shape="home"></Icon>
      </router-link>
      <hgroup>
        <h2 class="dh-page__header-subtitle">{{subtitle}}</h2>
        <h1 class="dh-page__header-title">{{title}}</h1>
      </hgroup>
    </header>
    <div :class="['dh-page__body', isGrid ? 'dh-page__body--grid' : '']">
      <slot></slot>
    </div>
  </article>
</template>

<script>
import Icon from './Icon';
export default {
  name: 'Page',
  components: {
    Icon,
  },
  props: {
    title: String,
    subtitle: String,
    isGrid: Boolean,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables";
.dh-page {
  &__header {
    display: flex;
    align-items: center;
    font-family: "Istok Web", sans-serif;
    & > * + * {
      margin-left: map-get($geo, 'm');
    }
    &-title {
      margin: 0;
      font-size: map-get($font-sizes, 'xxl');
    }
    &-subtitle {
      margin: 0;
      font-size: map-get($font-sizes, 'xl');
    }
  }
  &__body {
    width: 100%;
    margin: map-get($geo, 'm') 0;
    &--grid {
      display: grid;
      grid-column-gap: map-get($geo, 'l');
      grid-row-gap: map-get($geo, 'm');
      @include bp-s('s') {
        grid-template-columns: repeat(2, 1fr);
      }
      @include bp-s('m') {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
