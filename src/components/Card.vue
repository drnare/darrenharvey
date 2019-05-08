<template>
  <section class="dh-card">
    <header class="dh-card__header" v-if="title || image">
      <img
        v-if="image"
        :src="image.source"
        class="dh-card__header-image"
      >
      <h3 v-if="title" class="dh-card__header-title">{{title}}</h3>
      <Icon v-if="icon" :shape="icon" class="dh-card__header-icon"></Icon>
    </header>
    <div class="dh-card__body">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Button from './Button';
import Icon from './Icon';
export default {
  name: 'Card',
  components: {
    Button,
    Icon,
  },
  props: {
    title: String,
    image: Object,
    link: Object,
    icon: String,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables";
.dh-card {
  display: flex;
  flex-direction: column;
  padding: map-get($geo, 'l');
  margin-bottom: map-get($geo, 'm');
  background: transparentize(map-get($colors, 'white'), 0.1);
  border-radius: map-get($geo, 'm');
  box-shadow: 0 0 map-get($geo, 'm') transparentize(map-get($colors, 'black'), 0.9);
  overflow: hidden;
  transition: all .1s ease-in-out;

  &__link {
    text-decoration: none;
    color: inherit;
    border: 0;
    .dh-card {
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__header {
    position: relative;
    margin-bottom: map-get($geo, 'm');
    &-title {
      margin: 0;
      font-size: map-get($font-sizes, 'l');
    }
    &-image {
      width: calc(100% + (#{map-get($geo, 'm')} * 2));
      margin: #{'-' + map-get($geo, 'm')} calc(#{'-' + map-get($geo, 'm')});
      margin-bottom: map-get($geo, 's');
      vertical-align: middle;
    }
    &-icon {
      position: absolute;
      right: 0;
      bottom: -66%;
    }
  }
  &__footer {
    margin-top: auto;
    text-align: center;
  }
}
</style>
