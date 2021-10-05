<template>
  <div>
    <v-container>
      <fa-ui-breadcrumb :items="breadcrumb"></fa-ui-breadcrumb>
    </v-container>
    <v-container v-if="hasRecords">
      <bt-ws-dashboard></bt-ws-dashboard>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      breadcrumb: [],
    };
  },
  computed: {
    ...mapState("workspace", ["workspaces"]),
    hasRecords() {
      return this.workspaces && this.workspaces.length > 0;
    },
  },
  mounted() {
    this.$store.dispatch("workspace/retrieveWorkspaces");
  },
  async fetch() {},
};
</script>
