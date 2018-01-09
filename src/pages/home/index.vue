<template>
  <div class='vue-home'>
    <span>{{count}}</span>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='increN'>+5</button>
    <button @click='add'>++</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("home", {
      count(state) {
        return state.count;
      }
    })
  },
  methods: {
    ...mapMutations("home", ["increment", "decrement"]),
    ...mapMutations({
      increN(state) {
        this.$store.commit("home/increN", { amount: 5 });
      }
    }),
    ...mapActions("home", ["add"])
  }
};
</script>
