import dynamic from "next/dynamic"

import { fetchPostSlugs } from "../../src/fetchPostSlugs"
import Post from "../../components/Post"

import processPostMetadata from '../../src/processPostMetadata'

const renderToString = slug => {
  const Component = require(`../../content/posts/${slug}`).default;
  const ReactDOMServer = require("react-dom/server");

  return ReactDOMServer.renderToString(<Component />);
}

export default function PostWrapper({slug, metadata}) {
  let mdx;

  if (process.browser) {
    const Mdx = dynamic(() => import(`../../content/posts/${slug}`));

    mdx = <Mdx />;
  } else {
    const ssr = renderToString(slug)

    mdx = <div dangerouslySetInnerHTML={{ __html: ssr }} />;
  }

  return (
    <Post slug={slug} metadata={processPostMetadata(metadata)}>
      {mdx}
    </Post>
  )
}

export const getStaticProps = ctx => {
  const slug = ctx.params?.slug;
  const metadata = processPostMetadata(require(`../../content/posts/${slug}`).metadata)
  // const preview = renderToString(slug).substring(0, 200)

  return {
    props: {
      slug,
      metadata
      // preview
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
