<template>
  <div>
    <ul class="breadcrumb">
      <template v-for="(item, i) in breadcrumbItems">
        <li :key="i" v-bind:style="{ zIndex: (20 - i) }">
          <nuxt-link :to="item.path" v-text="item.label" />
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultItems: [
        { label: `Dashboard`, path: `/` },
      ],
    };
  },
  methods: {},
  computed: {
    breadcrumbItems() {
      return this.items || this.defaultItems;
    }
  },
  mounted() {

  },
};
</script>
<style lang="scss" scoped>
@import "assets/variables";

ul.breadcrumb {
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  list-style: none;
  li {
    background: $base-bg-color;
    border: 1px solid $secondary-light;
    box-shadow: 0 0 4px 1px $secondary, 2px -2px 4px 0 $secondary, 2px 2px 4px 0 $secondary;
    border-radius: 0 15px 15px 0;
    padding: 4px 15px;
    margin-left: -5px;

    &:last-child {
      background: #C3C9E9;
      border: 1px solid #F6FCFF;
      box-shadow: 2px -2px 4px 0 #C3C9E9, 2px 2px 4px 0 #C3C9E9;
      border-radius: 0 15px 15px 0;
    }

    a {
      text-decoration: none;
      color: $text-primary-color;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
