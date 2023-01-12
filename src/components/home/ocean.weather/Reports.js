import SurfReportEmbed from "./SurfReportEmbed";
import { WeatherReport } from "./WeatherReport";
import YoutubeEmbed from "./YoutubeEmbed";

export const Reports = () => (
  <>
    <h1 className="text-3xl">Kaua'i Ocean + Weather</h1>
    <div className="reports">
      <div className="">
        <WeatherReport embedId="kauai-island_united-states_5848511?geoloc=fixed&days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light" />
      </div>
      <div className="">
        <YoutubeEmbed embedId="eTTdHO0tDB8" />
      </div>
      <div className="">
        <SurfReportEmbed embedId="https://www.weather.gov/hfo/SRFobs#Kauai" />
      </div>
    </div>
  </>
);
