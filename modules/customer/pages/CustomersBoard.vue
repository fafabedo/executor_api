<template>
  <div>
    <v-container>
      <fa-ui-breadcrumb :items="breadcrumb"></fa-ui-breadcrumb>
    </v-container>
    <v-container tag="section">
      <div class="-title">Customers</div>
      <template v-if="hasCustomers">
        <fa-ui-datatable
          :columns="columns"
          :datafields="datafields"
          :selectionmode="`checkbox`"
          :data="customers"
        >
          <template v-slot:toolbar>
            <button class="bt btn" @click.stop="dialog = !dialog">Add</button>
          </template>
        </fa-ui-datatable>
      </template>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="700">
      <bt-customer-form-edit @close="dialog = !dialog" :customer="customer"></bt-customer-form-edit>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      customer: null,
      columns: [
        { text: "ID", datafield: "id", width: `3%` },
        { text: "Name", datafield: "name", width: `50%` },
        { text: "Slug", datafield: "slug", width: `30%` },
        {
          text: "",
          datafield: "Edit",
          width: `8%`,
          columntype: "button",
          cellsrenderer: () => {
            return "Edit";
          },
          buttonclick: (row) => {
            // console.log(row);
            this.customer = this.customers[row];
            this.dialog = true;
          },
        },
      ],
      datafields: [
        { name: "id", type: "int" },
        { name: "name", type: "string" },
        { name: "slug", type: "string" },
      ],
    };
  },
  computed: {
    // ...mapState("customer", ["customers"]),
    breadcrumb() {
      return [
        { label: `Dashboard`, path: `/` },
        { label: `Customer`, path: `/customers` },
      ]
    },
    customers() {
      return this.$store.getters['customer/getCustomers'] || null;
    },
    hasCustomers() {
      return this.customers && this.customers.length > 0;
    }
  },
  mounted() {
    this.$store.dispatch('customer/retrieveCustomers');
  },
  async fetch() {
    // this.$store.dispatch('customer/retrieveCustomers');
  }
};
</script>
