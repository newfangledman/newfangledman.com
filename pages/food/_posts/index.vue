<template>
  <post-container
    :contentBase="contentBase"
    :content="content"
    :attributes="attributes"
  ></post-container>
</template>
<script>
import { extractContent } from '@/pages/utils/utils';
import PostContainer from '@/containers/PostContainer';
export default {
  components: {
    [PostContainer.name]: PostContainer
  },
  data() {
    return {
      contentBase: ''
    };
  },
  async asyncData(context) {
    return extractContent(context);
  }
};
</script>
