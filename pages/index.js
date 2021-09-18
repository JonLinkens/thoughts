import Post from "../components/Post";
import { getApps } from "../lib/api";

export default function Home({ apps }) {
  return (
    <div className="flex-grow">
      <section className="mt-8">
        <div className="flex flex-col mx-4 md:mx-auto max-w-screen-md justify-center ">
          {apps.map((app, index) => (
            <Post key={index} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function getStaticProps() {
  const apps = getApps();
  return { props: { apps } };
}
