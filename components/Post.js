import Link from "next/link";

export default function Post({ app }) {
  return (
    <div className="border-t border-gray-200 my-1 ">
      <Link href={`/${app.filePath.replace(/\.mdx?$/, "")}`} passHref>
        <a className="font-lato p-2">
          <div className="px-2">
            <p className="text-lg pb-1">
              <strong>{app.data.title}</strong>
            </p>
            <p className="">{app.data.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
