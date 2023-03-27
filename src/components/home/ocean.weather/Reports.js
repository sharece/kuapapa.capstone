import React from "react";
import SurfReportEmbed from "./SurfReportEmbed";
import { WeatherReport } from "./WeatherReport";
// import YoutubeEmbed from "./YoutubeEmbed";

export const Reports = () => (
  <>
    <div className="reports p-3">
      <div className="weather-report">
        <WeatherReport embedId="https://www.meteoblue.com/en/weather/widget/daily/kauai-island_united-states_5848511?geoloc=fixed&days=4&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light" />
      </div>
      {/* https://www.meteoblue.com/en/weather/week/kauai-island_united-states_5848511 */}
      <div className="surf-report ">
        <SurfReportEmbed embedId="https://www.weather.gov/hfo/SRFobs#Kauai" />
      </div>
    </div>
  </>
);
