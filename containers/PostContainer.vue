<template>
  <div>
    <post-links v-if="!content.length" :files="attributes.files"></post-links>
    <post-content
      v-if="content.length"
      :attributes="attributes"
      :content="content"
    ></post-content>
  </div>
</template>
<script>
import PostContent from '@/components/PostContent';
import PostLinks from '@/components/PostLinks';
import Card from '@/components/Card';
export default {
  name: 'PostContainer',
  components: {
    [Card.name]: Card,
    [PostContent.name]: PostContent,
    [PostLinks.name]: PostLinks
  },
  props: {
    content: { type: String, default: '' },
    attributes: { type: Object, default: () => ({}) }
  }
};
</script>
