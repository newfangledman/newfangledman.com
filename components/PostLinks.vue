<template>
  <section class="section">
    <div class="columns is-mobile">
      <card :key="file" v-for="file in files" v-bind="[file]">
        {{ file }}
      </card>
    </div>
  </section>
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
