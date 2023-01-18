import React from "react";
import PropTypes from "prop-types";

export const WeatherReport = ({ embedId }) => (
  <div className="">
    <iframe
      title="weather"
      src={`https://www.meteoblue.com/en/weather/widget/daily/kauai-island_united-states_{$embedId}`}
      frameborder="0"
      allowtransparency="true"
      sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
      className="w-80rem h-24rem"
    ></iframe>
    {/* <div>
      <a
        href="https://www.meteoblue.com/en/weather/week/kauai-island_united-states_5848511?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
        rel="noopener"
      >
        Weather by Meteoblue.com
      </a>
    </div> */}
  </div>
);
WeatherReport.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default WeatherReport;
