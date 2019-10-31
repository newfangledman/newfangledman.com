export async function extractContent(base, { posts }) {
  const fm = require('front-matter');
  const md = require('markdown-it')({
    html: true,
    typographer: true
  });

  if (typeof posts === 'undefined') {
    return { content: [], attributes: false };
  }
  let fileContent;
  // imports need to be static
  switch (base) {
    case 'food':
      fileContent = await import(`@/content/food/${posts}.md`);
      break;
    case 'design':
      fileContent = await import(`@/content/design/${posts}.md`);
      break;
    case 'code':
      fileContent = await import(`@/content/code/${posts}.md`);
      break;
  }

  const { attributes, body } = fm(fileContent.default);

  return {
    attributes,
    content: md.render(body)
  };
}
