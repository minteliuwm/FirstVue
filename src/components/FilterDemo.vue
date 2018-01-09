<template>
  <div class='vue-filter'>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message | capitalize}}</p>
  </div>
</template>

<script>
export default {
  name: "filterdemo",
  data() {
    return {
      message: "test"
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

