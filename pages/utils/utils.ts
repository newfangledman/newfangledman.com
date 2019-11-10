export async function extractContent({
  params: { post },
  route: { fullPath }
}: {
  params: { post: string | undefined };
  route: { fullPath: string };
}) {
  const fm = require('front-matter');
  const md = require('markdown-it')({
    html: true,
    typographer: true
  });

  const contentBase = fullPath.split('/')[1];

  if (typeof post === 'undefined') {
    const attributes = createAttributesForDir(contentBase);
    return { content: '', attributes };
  }
  const fileContent = await import(`@/content/${contentBase}/${post}.md`);

  const { attributes, body } = fm(fileContent.default);

  return {
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
