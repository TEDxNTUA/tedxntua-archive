import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ href, title }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      passHref
      className={`text-2xl md:text-lg lg:text-xl font-semibold hover:text-[#eb0028] ${
        path.startsWith(href)
          ? "text-[#eb0028]" // Apply the active class
          : "text-white" // No additional class if not active
      }`}
    >
      {title}
    </Link>
  );
}

export default NavLink;
