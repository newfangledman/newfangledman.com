<template>
  <div>
    <ul>
      <li v-for="fileName in fileNames">{{ fileName }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostLinks',
  props: { files: { type: Array, default: () => [] } },
  computed: {
    fileNames() {
      return this.files.map((fileName) => fileName.replace('.md', ''));
    }
  }
};
</script>

<style lang="scss" scoped></style>
