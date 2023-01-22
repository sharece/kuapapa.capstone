import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Contact = () => (
  <>
    <Navbar />
    <div className="flex flex-col p-12 flex-wrap">
      <div className="text-2xl leading-relaxed">
        We welcome your comments or inquiries!
      </div>
      <div className="leading-relaxed text-2xl bg-slate-200 rounded-xl p-8">
        Nā Hōkū Welo, LLC P.O. Box 1805 Līhu‘e, HI 96766 admin@nahokuwelo.com
        Nalani K. Brun Economic Development Specialist IV-Tourism Office of
        Economic Development County of Kaua‘i 4444 Rice St. Suite 200 Līhu‘e, HI
        96766 Phone (808) 241-4952 Fax (808) 241-6399
      </div>
    </div>
    <Footer />
  </>
);
