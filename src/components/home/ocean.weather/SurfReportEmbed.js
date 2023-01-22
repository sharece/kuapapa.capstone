import React from "react";
import PropTypes from "prop-types";

export const SurfReportEmbed = ({ embedId }) => (
  <div className="inset-0 h-full w-80rem flex justify-center overflow-y-scroll">
    <iframe
      name="OMRKauai"
      title="embed"
      src="https://www.weather.gov/hfo/SRFobs#Kauai"
    ></iframe>
  </div>
);
SurfReportEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default SurfReportEmbed;
// height="460"
