<template>
  <div
    class="card"
    :class="contrastColor(color)"
    :lStyle="lStyle.flexCenter"
    :style="{ backgroundColor: `#${color}` }"
  >
    <p>{{ title }}</p>
    <slot />
  </div>
</template>

<script>
import contrastColor from '@/tools/contrast-color';
export default {
  props: {
    title: {
      type: String
    },
    color: {
      type: String,
    }
  },
  data() {
    return {
      lStyle: {
        flexCenter: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }
      }
    }
  },
  methods: {
    contrastColor: contrastColor
  }
}
</script>

<style lang="scss" scoped>
.card {
  font-family: "Alice";

  margin: 0;
  width: 100%;
  font-size: 24;
  padding: 32;
  box-shadow: 2 2 2 rgba(#000, 0.3); // not working

  &.card1 {
    border-radius: 8 8 0 0;
  }
  &.card2 {
    border-radius: 0 0 8 8;
  }

  &.dark {
    color: #111;
  }
  &.light {
    color: #fff;
  }
}
</style>
