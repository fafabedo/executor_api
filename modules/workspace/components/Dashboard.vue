<template>
  <div>
    <fa-ui-datatable
      :columns="columns"
      :datafields="datafields"
      :selectionmode="`checkbox`"
      :data="workspaces">
      <template v-slot:toolbar>
        <button class="bt btn">Add</button>
      </template>
    </fa-ui-datatable>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      columns: [
          { text: 'ID', datafield: 'id', width: `3%` },
          { text: 'Name', datafield: 'name', width: `40%` },
          { text: 'Token', datafield: 'token', width: `25%` },
          { text: 'Slug', datafield: 'slug', width: `20%` },
          {
            text: '', datafield: 'Edit', width: `8%`, columntype: 'button',
            cellsrenderer: () => {
                return 'Edit';
            },
            buttonclick: (row) => {
                console.log(row);
                //get the data and append in to the inputs
                // this.editrow = row;
                // let dataRecord = this.$refs.myGrid.getrowdata(this.editrow);
                // this.$refs.firstname.val(dataRecord.firstname);
                // this.$refs.lastname.val(dataRecord.lastname);
                // this.$refs.product.val(dataRecord.productname);
                // this.$refs.quantity.decimal = dataRecord.quantity;
                // this.$refs.price.decimal = dataRecord.price;
                // show the popup window.
                // this.$refs.myWindow.position = { x: 68, y: 368 };
                // this.$refs.myWindow.open();
            }
        }
      ],
      datafields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'token', type: 'string' },
            { name: 'slug', type: 'string' },
        ],
    }
  },
  computed: {
    ...mapState('workspace', ['workspaces']),
  },
  mounted() {
    // this.$store.dispatch('modules/workspace/retrieveWorkspaces');
  }
}
</script>
