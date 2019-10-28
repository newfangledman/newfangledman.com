<template>
  <post-content></post-content>
</template>
<script>

const fm = require('front-matter');
const md = require('markdown-it')({
  html: true,
  typographer: true
});
export default {
  async asyncData({ params }) {
    if (typeof params.posts === 'undefined') {
      console.log('PARAMS!', params);
      return { content: [], attributes: false };
    }
    // We read the markdown file by looking at the `post` parameter
    // in the URL and searching for a markdown file with that name in
    const fileContent = await import(`@/content/food/${params.posts}.md`);
    // We process the raw output through front-matter
    const res = fm(fileContent.default);
    return {
      // attributes will be an object containing the markdown metadata
      attributes: res.attributes,
      // content will contain the body of the markdown file,
      // rendered in HTML via the `markdownit` class
      content: md.render(res.body)
    };
  }
};
</script>
