import Link from "next/link";

function NavLink({ href, title, buttonClicked }) {
  return (
    <Link
      href={href}
      passHref
      className={`text-2xl md:text-lg lg:text-xl font-semibold hover:text-[#eb0028] ${
        buttonClicked === title ? "text-red-500" : "text-white"
      }`}
    >
      {title}
    </Link>
  );
}

export default NavLink;
