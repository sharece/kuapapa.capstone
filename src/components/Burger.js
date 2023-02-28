import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div
          className={clsx(`mobile-menu ${isOpen ? "page-burger-open" : ""}`)}
        >
          <NavLink
            className={({ isActive }) =>
              clsx("ham-link", { "ham-link-active": isActive })
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("ham-link", { "ham-link-active": isActive })
            }
            to="/resources"
          >
            Resources
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("ham-link", { "ham-link-active": isActive })
            }
            to="/BoundaryCert"
          >
            Boundary Certificates
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("ham-link", { "ham-link-active": isActive })
            }
            to="/mayormsg"
          >
            Message from the Mayor
          </NavLink>
        </div>
      )}
    </div>
  );
};
