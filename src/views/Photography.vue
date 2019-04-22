<template>
  <Page class="photography" title="Photography">
    <Icon v-if="loading" modifier="dh-anim__rotate" shape="refresh-cw"></Icon>
    <span v-if="error">
      Failed fetching photos. Visit <a href="https://www.flickr.com/photos/mdrx">Flickr</a>
    </span>
    <ul class="dh-photos" v-else>
      <li class="dh-photos__photo" v-for="photo in photos" :key="photo.link">
        <a class="dh-photos__photo-image" :href="photo.link" :style="{ backgroundImage: `url(${photo.media.m})` }"></a>
      </li>
    </ul>
  </Page>
</template>

<script>
import jsonp from 'jsonp';
import Card from '../components/Card';
import Page from '../components/Page';
import Icon from '../components/Icon';
import { setTimeout } from 'timers';
export default {
  name: "Photography",
  components: {
    Card,
    Page,
    Icon,
  },
  data() {
    return {
      loading: true,
      error: false,
      photos: [],
    };
  },
  mounted() {
    const request = jsonp(
      'https://api.flickr.com/services/feeds/photos_public.gne?id=49424486@N00&format=json',
      {
        name: "jsonFlickrFeed"
      },
      (err, data) => {
        if (err) {
          this.loading = false;
          this.error = true;
        } else {
          setTimeout(() => {
            this.photos = data.items;
            this.loading = false;
          }, 1000);
        }
      }
    );
  },
};
</script>

<style lang="scss">
@import "../styles/_variables";
.dh-photos {
  display: grid;
  grid-column-gap: map-get($geo, 'l');
  grid-row-gap: map-get($geo, 'l');
  @include bp-s('s') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include bp-s('m') {
    grid-template-columns: repeat(4, 1fr);
  }
  margin: 0;
  padding: 0;
  &__photo {
    height: rem-calc(160);
    width: 100%;
    list-style: none;
    &-image {
      display: block;
      height: 100%;
      background: transparent none no-repeat center center;
      background-size: cover;
      border-radius: map-get($geo, 'm');
      transition: all .1s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
