<template>
  <div id="vue-transition">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-show="show">hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">world</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "transitiondemo",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

