<template>
  <div>
    <div class="datatable" v-if="dataAdapter">
      <div class="toolbar">
        <slot name="toolbar"></slot>
      </div>
      <jqx-grid
        :width="`100%`"
        :source="dataAdapter"
        :columns="columns"
        :selectionmode="selectionmode"
        :columnsresize="true"
        :pageable="true"
      >
      </jqx-grid>
    </div>
  </div>
</template>
<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
export default {
  components: {
    JqxGrid,
  },
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => [
        { text: "Name", datafield: "name", width: `40%` },
        { text: "Type", datafield: "type", width: `30%` },
      ],
    },
    datafields: {
      type: Array,
      required: true,
      default: () => [
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
      ],
    },
    selectionmode: {
      type: String,
      default: 'singlerow'
    },
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      data2: null,
    };
  },
  computed: {
    source() {
      return {
        datatype: "array",
        localdata: this.localData,
        datafields: this.datafields,
        id: "id",
      }
    },
    dataAdapter() {
      if (!this.columns || !this.datafields) {
        return null;
      }
      return new jqx.dataAdapter(this.source);
    },
    localData() {
      return this.data || [];
    },
    showSearchBar() {
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/variables";
.toolbar {
  border: 1px solid $secondary-dark;
  border-radius: 4px 4px 0 0;
  min-height: 40px;
  padding: 5px 10px;
}
</style>
