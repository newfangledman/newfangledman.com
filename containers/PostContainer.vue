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

export default {
  name: 'PostContainer',
  components: {
    [PostContent.name]: PostContent,
    [PostLinks.name]: PostLinks
  },
  props: {
    content: { type: String, default: '' },
    attributes: { type: Object, default: () => ({}) }
  }
};
</script>
