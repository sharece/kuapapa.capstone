import clsx from "clsx";
import { Link } from "react-router-dom";

import { Website } from "../../assets/icons/Website";

export const Footer = () => (
  <>
    <div className="foot-container p-2 pt-4 text-xs w-full flex">
      <div className="foot-item flex p-1">
        <a target="_blank" rel="noreferrer" href="https://dev-island.org">
          <Website /> Made by Dev Island
        </a>
      </div>
      <div className="foot-item">
        {" "}
        <Link
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/disclaimer"
        >
          Disclaimer for Kaua'i Nui Kuapapa
        </Link>
      </div>
      <div className="contact-footer">
        <div className="contact-line flex p-1">Nā Hōkū Welo</div>
        <div className="foot-item p-1">
          <a href="mailto:admin@nahokuwelo.com?body=My custom mail body">
            admin@nahokuwelo.com
          </a>
        </div>
        <div className="contact-text">
          <div className="contact-line flex p-1">
            (808) 241-4952 || Fax (808) 241-6399
          </div>

          <div className="contact-line flex p-1">
            Nalani K. Brun Economic Development Specialist IV-Tourism
          </div>
        </div>
      </div>
    </div>
  </>
);
