<template>
  <div class="vue-star">
    <div v-if='starcount%2 == 0' class="vue-starcount">偶数{{ starcount }}</div>
    <div v-else class="vue-title">奇数{{ title }}</div>
    <div class="vue-cycle" v-for='(item,index) in list' @click='doClick'>
      {{item.value}}.{{item.text}}
    </div>
    <div class="vue-cycle1" v-for='item in list' @click='doClick'>
      {{item.value}}.{{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: ['starcount','title'],
  data() {
    return {
      list:[{
        value: '1',
        text: '学习JavaScript'
      },{
        value: '2',
        text: '学习Vue'
      },{
        value: '3',
        text: '整个牛项目'
      }]
    };
  },
  methods: {
    doClick() {
      debugger;
      this.$emit('selfClick');
    }
  }
}
</script>
