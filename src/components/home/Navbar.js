import { NavLink } from "react-router-dom";
import { Burger } from "../Burger";
import clsx from "clsx";
// import logo from "../../assets/circle-kuapapa.png";
// import homeicon from "../../assets/homeicon.png";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar z-50">
        <div className="title-header">
          <NavLink className="title" to="/home">
            Kaua'i Nui Kuapapa
          </NavLink>
        </div>
        <div className="nav-desktop">
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
              clsx("nav-link", {
                "nav-link-active": isActive,
              })
            }
            to="/resources"
          >
            Resources
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              clsx("nav-link", {
                "nav-link-active": isActive,
              })
            }
            to="/contact"
          >
            Contact
          </NavLink> */}
          {/* <NavLink
            className={({ isActive }) =>
              clsx("nav-link", {
                "nav-link-active": isActive,
              })
            }
            to="/disclaimer"
          >
            Disclaimer
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/boundary-certificates"
          >
            Boundary Certificates
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/mayor-message"
          >
            Message From Former Mayor Carvalho
          </NavLink>
        </div>
        <Burger />
      </div>
    </div>
  );
};
