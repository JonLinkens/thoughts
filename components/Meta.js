import Head from "next/head";

const Meta = ({ title, description, isIndexed }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="Jon Linkens" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {isIndexed ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
  );
};

export default Meta;
