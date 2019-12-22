<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        :key="file"
        v-for="file in fileNames"
        :title="file"
        :contentBase="$attrs.contentBase"
        icon="github-circle"
      >
      </card>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card';
export default {
  name: 'PostLinks',
  components: {
    [Card.name]: Card
  },
  props: { files: { type: Array, default: () => [] } },
  computed: {
    fileNames() {
      return this.files.map((fileName) => fileName.replace('.md', ''));
    }
  }
};
</script>

<style lang="scss" scoped></style>
