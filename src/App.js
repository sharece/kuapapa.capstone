import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import "./index.css";
import { Resources } from "./components/home/Resources";
import { MayorMsg } from "./components/home/MayorMsg";
import { BoundryCert } from "./components/home/BoundryCert";
import { Niihau } from "./components/niihau/Niihau";
import { Kona } from "./components/kona/Kona";
import { Puna } from "./components/puna/Puna";
import { Koolau } from "./components/koolau/Koolau";
import { Halelea } from "./components/halelea/Halelea";
import { Napali } from "./components/napali/Napali";
import { HomePage } from "./components/home/HomePage";
import { Disclaimer } from "./components/home/Disclaimer";
import { Kipu } from "./components/puna/Kipu";
import { Haiku } from "./components/puna/Haiku";
import { Niumalu } from "./components/puna/Niumalu";
import { Nawiliwili } from "./components/puna/Nawiliwili";
import { Kalapaki } from "./components/puna/Kalapaki";
import { Hanamaulu } from "./components/puna/Hanamaulu";
import { Wailua } from "./components/puna/Wailua";
import { Olohena } from "./components/puna/Olohena";
import { Waipouli } from "./components/puna/Waipouli";
import { Kapaa } from "./components/puna/Kapaa";
import { Kealia } from "./components/puna/Kealia";
import { Kamalomaloo } from "./components/puna/Kamalomaloo";
import { Mana } from "./components/kona/Mana";
import { Waimea } from "./components/kona/Waimea";
import { Makaweli } from "./components/kona/Makaweli";
import { Hanapepe } from "./components/kona/Hanapepe";
import { Wahiawa } from "./components/kona/Wahiawa";
import { Kalaheo } from "./components/kona/Kalaheo";
import { Lawai } from "./components/kona/Lawai";
import { Koloa } from "./components/kona/Koloa";
import { Weliweli } from "./components/kona/WeliWeli";
import { Paa } from "./components/kona/Paa";
import { Mahaulepu } from "./components/kona/Mahaulepu";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mayorMsg" element={<MayorMsg />} />
        <Route path="/boundryCert" element={<BoundryCert />} />
        <Route path="/niihau" element={<Niihau />} />
        <Route path="/kona" element={<Kona />} />
        <Route path="/puna" element={<Puna />} />
        <Route path="/kipu" element={<Kipu />} />
        <Route path="/haiku" element={<Haiku />} />
        <Route path="/niumalu" element={<Niumalu />} />
        <Route path="/nawiliwili" element={<Nawiliwili />} />
        <Route path="/kalapaki" element={<Kalapaki />} />
        <Route path="/hanamaulu" element={<Hanamaulu />} />
        <Route path="/wailua" element={<Wailua />} />
        <Route path="/olohena" element={<Olohena />} />
        <Route path="/waipouli" element={<Waipouli />} />
        <Route path="/kapaa" element={<Kapaa />} />
        <Route path="/kealia" element={<Kealia />} />
        <Route path="/kamalomaloo" element={<Kamalomaloo />} />
        <Route path="/koolau" element={<Koolau />} />
        <Route path="/halelea" element={<Halelea />} />
        <Route path="/napali" element={<Napali />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </div>
  );
}
export default App;
