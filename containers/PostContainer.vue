<template>
  <div>
    <div v-if="!content.length" :attributes="attributes">HELLO</div>
    <post-content
      v-if="content.length"
      :attributes="attributes"
      :content="content"
    ></post-content>
  </div>
</template>
<script>
import PostContent from '@/components/PostContent';
export default {
  name: 'PostContainer',
  components: {
    [PostContent.name]: PostContent
  },
  props: {
    content: { type: String, default: '' },
    attributes: { type: Object, default: () => ({}) }
  }
};
</script>
