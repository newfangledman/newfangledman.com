<template>
  <div>
    <post-links
      v-if="!content.length"
      :contentBase="contentBase"
      :files="attributes.files"
    ></post-links>
    <post-content
      v-if="content.length"
      :attributes="attributes"
      :contentBase="contentBase"
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
    contentBase: { type: String, default: '' },
    content: { type: String, default: '' },
    attributes: { type: Object, default: () => ({}) }
  }
};
</script>
