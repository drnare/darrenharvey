<template>
  <div class="dh-bubble-container">
    <div v-for="(bubble, index) in 8" :key="index" class="dh-bubble"></div>
  </div>
</template>

<script>
export default {
  name: "Bubbles"
};
</script>

<style lang="scss">
@import "../styles/_variables";
@function encodeColor($color) {
  @return "%23" + str-slice("#{$color}", 2, -1);
}
@function getPosition($index) {
  $positions: (
    1: -10 -20,
    2: 0 40,
    3: 66 75,
    4: 50 50,
    5: 70 -20,
    6: 50 -20,
    7: 33 33,
    8: 0 50,
  );
  @return map-get($positions, $index);
}
@function getSize($index) {
  $sizes: (
    1: 300,
    2: 400,
    3: 200,
    4: 400,
    5: 900,
    6: 400,
    7: 300,
    8: 900,
  );
  @return map-get($sizes, $index);
}
@function getOpacity() {
  @return (random(4) + 1) / 10;
}
@function getGradient($index) {
  $gradients: (
    1: "#bc4e9c" "#f80759",
    2: "#2196f3" "#2196f3",
    3: "#FFF" "#076585",
    4: "#C9FFBF" "#FFAFBD",
    5: "#FF8008" "#FFC837",
    6: "#DAE2F8" "#D6A4A4",
    7: "#2193b0" "#6dd5ed",
    8: "#556270" "#4ECDC4",
  );
  @return map-get($gradients, $index);
}

@mixin bubble(
  $size: 200,
  $gradient: "#FF8008" "#FFC837",
  $opacity: 0.5,
  $duration: 4
) {
  background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><radialGradient id="gradient"><stop stop-color="#{encodeColor(nth($gradient, 1))}" /><stop offset="66%" stop-color="#{encodeColor(nth($gradient, 2))}" /></radialGradient></defs><g><path style="fill: url(%23gradient)" d="M84.257 250.031c5.956-102.416 93.528-158.07 165.181-155.5 107.912 3.871 151.332 52.884 165.181 155.5 11.164 82.724-49.281 157.038-165.181 155.5-79.094-1.049-170.073-71.378-165.181-155.5z"/></g></svg>')
    no-repeat;
  background-size: auto;
  width: #{$size}px;
  height: #{$size}px;
  transform-origin: center;
  animation: zooma 1s ease-in-out, bubble #{$duration}s ease-in-out #{random(3) + 1}s infinite alternate;
  opacity: $opacity;
}
@mixin bubble-position($offset: 1) {
  .dh-bubble {
    @for $i from 1 through 8 {
      @if ($offset > 1) {
        $offset: random($offset) + 10;
      }
      &:nth-child(#{$i}) {
        left: #{nth(getPosition($i), 1) - random($offset) +  '%'};
        top: #{nth(getPosition($i), 2) - random($offset) + '%'};
      }
    }
  }
}

.dh-bubble-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
  background: map-get($colors, 'white');
  z-index: -1;

  &.work {
    @include bubble-position(30);
  }
  &.contact {
    @include bubble-position(50);
  }
  &.photography {
    @include bubble-position(70);
  }

  .dh-bubble {
    position: fixed;
    transition: all 1s ease-in-out;
    @for $i from 1 through 8 {
      &:nth-child(#{$i}) {
        left: #{nth(getPosition($i), 1) + '%'};
        top: #{nth(getPosition($i), 2) + '%'};
        @include bubble(getSize($i), getGradient($i), getOpacity(), 8);
      }
    }
  }
}

@keyframes bubble {
  from {
    transform: rotate(0) scale(1);
  }
  50% {
    transform: rotate(-20deg) scale(1.05);
  }
  to {
    transform: rotate(40deg) scale(0.95);
  }
}
@keyframes zooma {
  from {
    transform: scale(0);
  }
  66% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
