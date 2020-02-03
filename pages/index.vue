<template>
  <div>
    <div class="posts">
      <main>
        <div class="post" v-for="post in sortedPosts" :key="post.id">
          <h3>
            <a :href="`blog/${post.slug}`">{{ post.title }}</a>
          </h3>
          <small>{{ post.date }}</small>
          <div v-html="post.excerpt"></div>
          <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div>
      </main>
      <aside>
        <h2 class="tags-title">Tags</h2>
        <div class="tags-list">
          <ul>
            <li
              @click="updateTag(tag)"
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '']"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card';

export default {
  name: 'HomePage',
  components: {
    Card
  },
  data() {
    return {
      selectedTag: null,
      activeClass: 'active'
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter((el) => el.tags.includes(this.selectedTag));
    }
  },
  created() {
    this.$store.dispatch('getPosts');
  }
};
</script>
