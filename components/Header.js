import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex justify-center">
        <Link href="/" passHref>
          <a
            className="
      font-pacifico text-4xl text-gray-900
      px-8 py-6 
      transform hover:scale-[1.02] transition"
          >
            thoughts
          </a>
        </Link>
      </nav>
      <p className="text-center font-lato font-bold text-gray-800">
        musings from a developer; opinions, not facts.
      </p>
    </>
  );
}
