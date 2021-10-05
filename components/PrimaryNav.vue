<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
    miniVariant: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      drawer2: false,
    }
  },
  methods: {

  },
  computed: {

  },
  async fetch() {
    await this.$axios
      .get(`http://executorapi.local/primary-nav`)
      .then((res) => {
        const workspaces = res.data;

      })
      .catch((e) => console.log(e));
  }
}
</script>
