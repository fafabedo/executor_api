<template>
  <div>
    <div class="top">
      <v-btn icon large @click.stop="close">
        <v-icon large dark> mdi-close </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close(e) {
      this.$emit('close', e);
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
