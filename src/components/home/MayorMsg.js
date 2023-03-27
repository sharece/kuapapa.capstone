import bernsign from "../../assets/bernard-sig.png";
import { Navbar } from "./Navbar";
export const MayorMsg = () => (
  <>
    <Navbar />
    <div className="mayor-msg bg-white p-16">
      <p className="p-3"> July, 2014 </p>
      <div className="mayor-text">
        Aloha and welcome to Kauaʻi’s newest educational mission: Kauaʻi Nui
        Kuapapa—Talking About Our Island, which is created for our local
        community and can also be utilized by visitors and by all those
        interested in the history and culture of Kaua‘i and Ni‘ihau. My Holo
        Holo 2020 vision, calls for all organizations, businesses, residents and
        visitors on Kauaʻi to be part of creating an island that is sustainable,
        values our native culture, has a thriving and healthy economy, cares for
        all—keiki to kupuna—and has a responsible and user-friendly local
        government. Kauaʻi Nui Kuapapa fits perfectly into this plan as it
        provides an incredible resource of information of where we come from and
        how we operated and identified with our surroundings when we were in
        fact living a sustainable lifestyle on this island. There is incredible
        knowledge locked up in the original place names that exist around
        Kauaʻi. There is also substantial benefit to knowing how Moku and
        Ahupuaʻa land divisions according to availability of its natural
        resources originally divided the island. This project is designed to
        help us unlock that information and share it with our community so that
        we can use it to help us make good decisions into the future. Uniquely
        Kauaʻi, the historical Moku and Ahupuaʻa land management system was
        established by Kauaʻi’s King Manokalanipō in the 1400s. Today this
        project recognizes Moku and Ahupuaʻa of the era of King Kaumuali‘i’s
        reign and from it we continue to honor Kaua‘i's old and unique culture.
        We will use this information to support Kaua‘i’s modern-day identity,
        while always integrating our multi-ethnic and diverse population as one
        large ‘ohana. It is my hope that this project will allow the people of
        Kaua‘i County to become more informed about their respective Moku and
        Ahupua‘a through Kaua‘i Nui Kuapapa and that this knowledge will
        continue to support our community to become more informed in
        participating in various aspects of society, including social issues,
        issues related to environment, agriculture, economy, culture, and
        development. Mahalo to the Nā Hōkū Welo team from the bottom of my heart
        for all of their hard work, patience and perseverance in helping us get
        this project up and running.
      </div>
      <div className="">
        <img alt="bernard signature" className="signature" src={bernsign} />
        Bernard P. Carvalho, Jr. Mayor, County of Kaua‘i
      </div>
    </div>
  </>
);
