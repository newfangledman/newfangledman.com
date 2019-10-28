export async function extractContent(path, { posts }) {
  const fm = require('front-matter');
  const md = require('markdown-it')({
    html: true,
    typographer: true
  });
  if (typeof posts === 'undefined') {
    console.log('PARAMS!', posts);
    return { content: [], attributes: false };
  }

  const fileContent = await import(`${path}${posts}.md`);
  const { attributes, body } = fm(fileContent.default);

  return {
    attributes,
    content: md.render(body)
  };
}
