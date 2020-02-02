import GhostContentAPI from '@tryghost/content-api';
const siteURL = 'https://css-tricks.com';

export const state = () => ({
  posts: [],
  tags: []
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateTags: (state, tags) => {
    state.tags = tags;
  }
};

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return;
    const api = new GhostContentAPI({
      url: process.env.contentLocation,
      key: process.env.contentApiKey,
      version: 'v3'
    });

    try {
      let posts = await api.posts
        .browse({ limit: 5, include: 'tags,authors' })
        .then((posts) => posts)
        .catch((err) => {
          console.error(err);
        });

      posts = posts
        .filter((el) => el.visibility === 'public')
        // eslint-disable-next-line
        .map(({ id, slug, title, excerpt, published_at, tags, html }) => ({
          id,
          slug,
          title,
          excerpt,
          published_at,
          tags,
          html
        }));

      commit('updatePosts', posts);
    } catch (err) {
      console.log(err);
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return;

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags);
    }, []);
    allTags = allTags.join();

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json());

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }));

      commit('updateTags', tags);
    } catch (err) {
      console.log(err);
    }
  }
};
