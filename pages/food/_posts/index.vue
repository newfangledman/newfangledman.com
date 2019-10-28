<template>
  <div v-if="attributes" :key="$route.params.post">
    <div class="container">
      <div class="columns is-centered">
        <div class="blog column is-10-tablet">
          <div class="title">{{ attributes.title }}</div>
          <div class="subtitle">
            Published on {{ attributes.ctime }} by {{ attributes.author }}
          </div>
          <div class="blog-content content" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {extractContent} from "@/pages/utils/utils"
export default {
  async asyncData({ params }) {
    return extractContent(`food`, params)
  }
};
</script>
