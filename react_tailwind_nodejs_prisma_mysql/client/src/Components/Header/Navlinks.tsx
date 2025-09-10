import { NAVLINKS } from "../../Constans/NavLinks";
import NavLink from "./NavLink";

export default function Navlinks() {
  return (
    <nav className="w-full sm:w-auto">
      <ul className="flex flex-col sm:flex-row w-full sm:w-auto">
        {NAVLINKS.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </ul>
    </nav>
  );
}
