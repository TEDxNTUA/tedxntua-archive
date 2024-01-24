import Link from "next/link";

function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="text-2xl md:text-lg lg:text-xl text-white font-semibold hover:text-[#eb0028]"
    >
      {title}
    </Link>
  );
}

export default NavLink;
