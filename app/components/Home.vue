<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="nsvue-colors" />
    </ActionBar>

    <div class="container" :lStyle="lStyle.flexCenter">
      <div
        class="card card1"
        :class="contrastColor(cor1)"
        :lStyle="lStyle.flexCenter"
        :style="{ backgroundColor: `#${cor1}` }"
      >
        <p>Initial Color</p>
        <TextField v-model="corInicial" :maxlength="7" @blur="mudouCor" />
      </div>

      <div
        class="card card2"
        :class="contrastColor(cor2)"
        :lStyle="lStyle.flexCenter"
        :style="{ backgroundColor: `#${cor2}` }"
      >
        <p>Simplified color</p>
        <TextField :text="cor2" :autocorrect="false" />
      </div>
    </div>
  </Page>
</template>

<script>
import shortenHexdColor from 'shorten-hexdcolor';

import contrastColor from '@/tools/contrast-color';
import parseColor from '@/tools/parse-color';

export default {
  data() {
    return {
      corInicial: 'DADEDA',
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
  computed: {
    cor1() {
      return parseColor(this.corInicial)
    },
    cor2() {
      return shortenHexdColor(this.cor1)
    }
  },
  methods: {
    contrastColor: contrastColor,
    mudouCor() {
      this.corInicial = parseColor(this.corInicial)
    },
  }
}
</script>

<style scoped lang="scss">
@import "../app-variables";

.container {
  width: 70%;
  border-radius: 8;
  overflow: hidden;
}

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
