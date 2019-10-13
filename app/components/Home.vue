<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="nsvue-colors" />
    </ActionBar>

    <div class="container" :lStyle="lStyle.flexCenter">
      <Card class="card1" title="Initial Color" :color="cor1">
        <TextField v-model="corInicial" @blur="mudouCor" />
      </Card>

      <Card class="card2" title="Simplified Color" :color="cor2">
        <TextField :text="cor2" />
      </Card>
    </div>
  </Page>
</template>

<script>
import Card from '@/components/UI/Card.vue';
import shortenHexdColor from 'shorten-hexdcolor';
import parseColor from '@/tools/parse-color';

export default {
  components: {
    Card
  },
  data() {
    return {
      corInicial: '',
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
    mudouCor() {
      this.corInicial = parseColor(this.corInicial)
    },
  },
  beforeMount() {
    const colors = ['ADF039', '16597B', 'A0165D', '1786E2'];
    const choosedIndex = Math.round(Math.random() * colors.length - 1);

    this.corInicial = colors[choosedIndex];
  }
}
</script>

<style scoped lang="scss">
@import "../app-variables";

.container {
  width: 70%;
}
</style>
