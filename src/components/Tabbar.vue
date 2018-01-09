<template>
  <div class="vue-tabbar">
    <div v-for='(item, index) in items'
      class="vue-tabbar-item"
      :class="{active:selected==index}"
      @click="change(index)"
    >
    {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: ["items"],
  data() {
    return {
      selected: 0
    };
  },
  methods: {
    change(index) {
      this.selected = index;
    }
  }
};
</script>
