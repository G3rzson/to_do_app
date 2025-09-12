"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  link: {
    href: string;
    title: string;
  };
};

export default function LinkItem({ link }: Props) {
  const pathName = usePathname();
  const isActive =
    pathName === link.href ||
    (pathName.startsWith(link.href) && link.href !== "/");

  return (
    <li className="nav-item">
      <Link className={`nav-link ${isActive ? "active" : ""}`} href={link.href}>
        {link.title}
      </Link>
    </li>
  );
}
