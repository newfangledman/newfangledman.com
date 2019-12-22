export async function extractContent({
  params,
  params: { posts },
  route: { fullPath }
}: {
  params: { posts: string | undefined };
  route: { fullPath: string };
}) {
  const fm = require('front-matter');
  const md = require('markdown-it')({
    html: true,
    typographer: true
  });

  const contentBase = fullPath.split('/')[1];

  if (typeof posts === 'undefined') {
    const attributes = createAttributesForDir(contentBase);
    return { contentBase, content: '', attributes };
  }
  const fileContent = await import(`@/content/${contentBase}/${posts}.md`);
  const { attributes, body } = fm(fileContent.default);
  return {
    contentBase,
    attributes,
    content: md.render(body)
  };
}

function getFiles(contentBase: string) {
  if (process.server) {
    const fs = require('fs');
    const files = fs.readdirSync(`./content/${contentBase}`);
    return files;
  }
}

function createAttributesForDir(contentBase: string) {
  const files = getFiles(contentBase);
  const fileNames = files.map((file: string) => file.replace(/\.[^/.]+$/, ''));
  return { files, fileNames };
}
