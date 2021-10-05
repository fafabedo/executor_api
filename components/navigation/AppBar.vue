<template>
  <v-app-bar
      :clipped-left="clipped"
      fixed
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title >Executor</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-avatar color="orange" size="40">
        <span class="white--text text-h6">{{ `F` }}</span>
      </v-avatar>
    </v-app-bar>
</template>
<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      rightDrawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      // this.$emit('drawer', this.drawer);
    }
  },
  watch: {
    drawer(val) {
      this.$emit('drawer', val);
    },
    rightDrawer(val) {
      this.$emit('rightDrawer', val);
    }
  }
}
</script>
