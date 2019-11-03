<template>
  <post-container :content="content" :attributes="attributes"></post-container>
</template>
<script>
import { extractContent } from '@/pages/utils/utils';
import PostContainer from '@/containers/PostContainer';
export default {
  components: {
    [PostContainer.name]: PostContainer
  },
  async asyncData(context) {
    return extractContent(context)
  }
};
</script>
