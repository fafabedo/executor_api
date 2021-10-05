<template>
<div>
  <v-container>
    Home page
  </v-container>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      items: ['One', 'Two', 'Three']
    }
  },
  mounted() {
    // console.log(this.$store);
  }
}
</script>
