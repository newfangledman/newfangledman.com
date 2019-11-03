function getFiles(dir) {
  if (process.server) {
    const fs = require('fs');
    const files = fs.readdirSync(`./content/${dir}`);
    return files;
  }
}

export async function extractContent({
  params: { posts },
  route: { fullPath }
}) {
  const fm = require('front-matter');
  const md = require('markdown-it')({
    html: true,
    typographer: true
  });

  const contentBase = fullPath.split('/')[1];

  if (typeof posts === 'undefined') {
    return { content: '', attributes: { files: getFiles(contentBase) } };
  }
  const fileContent = await import(`@/content/${contentBase}/${posts}.md`);

  const { attributes, body } = fm(fileContent.default);

  return {
    attributes,
    content: md.render(body)
  };
}
