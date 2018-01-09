<template>
  <li>
    {{content}}
    <button @click="$emit('remove')">X</button>
  </li>
</template>

<script>
export default {
  name: "todoitem",
  props: ["content"]
};
</script>
