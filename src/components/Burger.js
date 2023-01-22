import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />

      <div className={clsx(`mobile-menu ${isOpen ? "page-burger-open" : ""}`)}>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/resources"
        >
          Resources
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/disclaimer"
        >
          Disclaimer
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/boundrycerts"
        >
          Boundry Certificates
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/mayormsg"
        >
          Message from the Mayor
        </NavLink>
      </div>
    </div>
  );
};
