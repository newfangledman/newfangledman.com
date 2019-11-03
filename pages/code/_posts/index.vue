<template>
  <div>
    <div v-if="!content.length" :attributes="attributes">HELLO</div>
    <post-content v-if="content.length":attributes="attributes" :content="content"></post-content>
  </div>
</template>
<script>
import { extractContent, getFiles } from '@/pages/utils/utils';
import PostContent from '@/components/PostContent';
const contentBase = `code`
getFiles(contentBase)
export default {
  components: {
    [PostContent.name]: PostContent
  },
  data() {
    return {
      contentBase: `code`
    }
  },
  async asyncData({ params }) {
    return extractContent(contentBase, params);
  }
};
</script>
