import dynamic from "next/dynamic"

import { fetchPostSlugs } from "../../src/fetchPostSlugs"
import PostTemplate from "../../components/PostTemplate"

import processPostMetadata from '../../src/processPostMetadata'

export default function Post({slug, metadata}) {
  let mdx;

  if (process.browser) {
    const Mdx = dynamic(() => import(`../../content/posts/${slug}`));

    mdx = <Mdx />;
  } else {
    const Component = require(`../../content/posts/${slug}`).default;
    const ReactDOMServer = require("react-dom/server");

    const ssr = ReactDOMServer.renderToString(<Component />);

    mdx = <div dangerouslySetInnerHTML={{ __html: ssr }} />;
  }

  return (
    <PostTemplate metadata={processPostMetadata(metadata)}>
      {mdx}
    </PostTemplate>
  )
}

export const getStaticProps = ctx => {
  const slug = ctx.params?.slug;

  return {
    props: {
      slug,
      metadata: processPostMetadata(require(`../../content/posts/${slug}`).metadata),
    },
  };
};

export async function getStaticPaths() {
  const slugs = await fetchPostSlugs();

  return {
    paths: slugs?.map((slug) => ({ params: { slug } })),
    fallback: false, // In a static-only build, we don't need fallback rendering.
  };
}

// export const config = {unstable_runtimeJS: false}
