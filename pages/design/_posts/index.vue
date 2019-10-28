<template>
  <post-content :attributes="attributes" :content="content"></post-content>
</template>
<script>
import {extractContent} from "@/pages/utils/utils"
import PostContent from "@/components/PostContent"
export default {
  components: {
      [PostContent.name]: PostContent
  },
  async asyncData({ params }) {
    return extractContent(`design`, params)
  }
};
</script>
