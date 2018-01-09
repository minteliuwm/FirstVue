<template>
  <div id='vue-test'>
    <span>{{count}}</span>
    <button v-on:click='inc'>+inc</button>
    <button @click='reset'>reset</button>
    <vue-star @selfClick='doClick' :starcount='count' :title='title'></vue-star>
  </div>
</template>

<script>
import star from "../components/Star";

export default {
  name: "test",
  data() {
    return {
      count: 0
    };
  },
  computed: {
    title() {
      return this.count;
    }
  },
  methods: {
    inc() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
    doClick() {
      debugger;
    }
  },
  components: {
    "vue-star": star
  }
};
</script>