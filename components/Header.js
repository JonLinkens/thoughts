import Link from "next/link";

export default function Header() {
  return (
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
  );
}
