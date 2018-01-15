<template>
  <div class='vue-listcombobox'>
    <input type="text" class='vue-listcombobox-input' @click.stop='showListPanel' />
  </div>
</template>

<script>
export default {
  name: 'ListCombobox',
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  methods: {
    showListPanel() {
      let list = this.list;
    }
  }
}
</script>
