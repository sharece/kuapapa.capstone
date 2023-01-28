import { Inbox } from "../../assets/icons/Inbox";
import { Office } from "../../assets/icons/Office";
import { Mail } from "../../assets/icons/Mail";
import { Person } from "../../assets/icons/Person";
import { ChatBubble } from "../../assets/icons/ChatBubble";
import { Phone } from "../../assets/icons/Phone";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Contact = () => (
  <>
    <Navbar />
    <div className="pt-10">
      <div className="contact-container flex flex-col  flex-wrap">
        <div className="text-3xl leading-relaxed">Share your mana'o</div>
        <ChatBubble />

        <div className=" p-5">
          <div className="all-contact leading-relaxed p-3 text-2xl bg-slate-200 rounded-xl flex flex-wrap">
            <div className="  p-3 text-3xl">Nā Hōkū Welo LLC</div>
            <div className="contact-text">
              <div className="contact-line flex p-1">
                <Phone />
                (808) 241-4952 || Fax (808) 241-6399
              </div>
              <div className="contact-line flex p-1">
                <Person />
                Nalani K. Brun Economic Development Specialist IV-Tourism
              </div>
              <div className="contact-line flex p-1">
                <Mail />
                P.O. Box 1805 Līhu‘e, HI 96766 admin@nahokuwelo.com
              </div>
              <div className="contact-line flex p-1">
                <Office />
                Office of Economic Development County of Kaua‘i 4444 Rice St.
                Suite 200 Līhu‘e, HI 96766
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
