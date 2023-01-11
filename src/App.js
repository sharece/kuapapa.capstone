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
        <Route path="/koolau" element={<Koolau />} />
        <Route path="/halelea" element={<Halelea />} />
        <Route path="/napali" element={<Napali />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </div>
  );
}
export default App;
