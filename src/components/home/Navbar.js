import { Link, NavLink } from "react-router-dom";
import { ContactModal } from "./ContactModal";
export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div>
        <Link to="/">KAUA'I NUI KUAPAPA</Link>
      </div>
      <div className="contact-resource">
        <ContactModal />
        <Link to="/resources">RESOURCES</Link>
      </div>
    </nav>
  );
};
