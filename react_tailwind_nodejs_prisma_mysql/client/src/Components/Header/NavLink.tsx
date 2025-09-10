import { Link, useLocation } from "react-router-dom";

type Props = {
  link: {
    title: string;
    href: string;
  };
};

export default function NavLink({ link }: Props) {
  const location = useLocation();
  const isActive =
    location.pathname === link.href ||
    (location.pathname.startsWith(link.href) && link.href !== "/");
  return (
    <li key={link.title} className="w-full sm:w-auto">
      <Link
        to={link.href}
        className={`${
          isActive ? "bg-zinc-300 text-zinc-800" : "bg-zinc-800 text-zinc-300"
        } hover:bg-zinc-300 hover:text-zinc-800 duration-300 w-full text-center sm:w-auto block p-2`}
      >
        {link.title}
      </Link>
    </li>
  );
}
