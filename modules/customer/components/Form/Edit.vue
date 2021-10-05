<template>
  <div>
    <v-card class="bt form">
      <v-card-title class="-title">
        <fa-form-top-bar @close="close"/>
        Customers
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Customer name"
          placeholder="Enter customer name"
          v-model="customer.name"
          solo
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <button class="bt btn" @click.stop="save">Save</button>
        <button class="bt btn">Delete</button>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    customer: {
      type: Object,
      default: () => {
        name: ``
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    close(e) {
      this.$emit('close', e);
    },
    save(e) {
      if (this.customer && this.customer.id) {
        this.$store.dispatch('customer/putCustomer', this.customer)
      } else {
        this.$store.dispatch('customer/postCustomer', this.customer)
      }
    }
  }
};
</script>
