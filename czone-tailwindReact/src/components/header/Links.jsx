import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbLinks } from "../../constants";

const Links = () => {
  const [active, setActive] = useState("about");
  return (
    <nav>
    <ul className="list-none flex justify-start items-center flex-1 space-x-4">
      {BreadcrumbLinks.map((link, index) => (
        <li
          key={link.id}
          className={`font-roboto font-normal text-[12px] cursor-pointer ${
            active === link.title ? "text-yellow-1" : "text-white"
        }`}
          onClick={() => setActive(link.title)}
        >
        <Link to={`${link.id}`} className="hover:text-yellow-1">
          {link.title}
          </Link>
        </li>
      ))}
    </ul>
    </nav>
  );
};

export default Links;
