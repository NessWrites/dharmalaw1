import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../../../css/components/header/menu/MenuList.css";

export default function MenuList() {
  const location = useLocation();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "mission", label: "Mission" },
    { id: "expertise", label: "Our Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contacts" },
    { id: "publication", label: "Publication", to: "/publication" },
    { id: "book-appointment", label: "Book an Appointment", to: "/book-appointment" },
  ];

  return (
    <ul className="menuSection">
      {menuItems.map((item) => (
        <li key={item.id}>
          {item.to ? (
            <Link className="menuBtn" to={item.to}>
              {item.label}
            </Link>
          ) : (
            <button
              className="menuBtn"
              onClick={() => scrollToSection(item.id)}
              disabled={location.pathname !== "/"}
            >
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
