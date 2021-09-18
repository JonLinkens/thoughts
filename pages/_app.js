import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta
        title="thoughts from a developer"
        description="thoughts from a developer."
        isIndexed={true}
      />

      <div className="flex flex-col h-screen ">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
