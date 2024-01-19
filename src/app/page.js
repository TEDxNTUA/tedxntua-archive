import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/watch">Watch</Link>
      </li>
      <li>
        <Link href="/blog">Blog Post</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
  );
}
