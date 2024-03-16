<!--
 * @Author: chenhuang
 * @Date: 2024-03-16 11:22:41
 * @Description: 
-->
<template>
  <div>{{ msg }}</div>
  <div><button @click="clickMe">点我</button></div>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      msg: "你好呀 我是工具箱",
    };
  },
  methods: {
    clickMe() {
      alert("点击成功！");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  color: pink;
}
</style>
