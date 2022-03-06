import { join } from "path";
import fs from "fs";
import { getApp } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import CodeBlock from "../components/CodeBlock";
import Meta from "../components/Meta";

import Comments from "../components/Comments";

export default function Post({ app }) {
  return (
    <div className="mt-8 mx-2 md:mx-auto flex-grow">
      <Meta
        title={app.data.title + " - thoughts from a developer"}
        description={app.data.description}
        isIndexed={true}
      />

      <article className="prose lg:prose-lg xl:prose-xl justify-center flex-col mx-auto mb-12">
        <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
          {app.content}
        </ReactMarkdown>
      </article>
      <Comments title={app.data.title} />
    </div>
  );
}

export async function getStaticPaths() {
  // get markdown files
  const appsPath = join(process.cwd(), "content");
  const appFilePaths = fs
    .readdirSync(appsPath)
    .filter((path) => /\.mdx?$/.test(path));

  // remove file extensions -> map path into static paths object
  const paths = appFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const app = getApp(params.slug);
  return { props: { app } };
}
