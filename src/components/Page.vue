<template>
  <div class="vue-home">
    <router-link to="/test">Test</router-link>
    <router-link to="/todo">TodoList</router-link>
    <router-link :to="{name: 'Tabbar', params:{items:[{text:'tab1'},{text:'tab2'},{text:'tab3'}]}}">Tabbar</router-link>
    <router-link to="/home">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "page"
};
</script>
