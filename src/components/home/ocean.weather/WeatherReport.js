import React from "react";
import PropTypes from "prop-types";

export const WeatherReport = ({ embedId }) => (
  <div className="p-2">
    <iframe
      name="kauaiWeather"
      title="embed"
      src="https://www.meteoblue.com/en/weather/widget/daily/kauai-island_united-states_5848511?geoloc=fixed&days=4&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light"
      frameborder="0"
      width="100%"
      allowtransparency="true"
    ></iframe>
    <div></div>
  </div>
);
WeatherReport.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default WeatherReport;
