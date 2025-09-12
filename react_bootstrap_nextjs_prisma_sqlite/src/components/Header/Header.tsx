"use client";

import LinkItem from "./LinkItem";
import { navLinks } from "./navlinks";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <ul className="container navbar-nav">
          {navLinks.map((link) => (
            <LinkItem key={link.title} link={link} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
