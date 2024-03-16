<template>
  <div>Hello, Vue!</div>
  <tools></tools>
</template>

<script>
import tools from "~/vue/components/tools.vue";
export default {
  name: "App",
  components: {
    tools,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
