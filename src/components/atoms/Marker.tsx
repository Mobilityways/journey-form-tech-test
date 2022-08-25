import React, { useEffect } from "react";

/**
 * Google Map marker
 * See https://developers.google.com/maps/documentation/javascript/react-map
 */
export const Marker = (options: google.maps.MarkerOptions) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};
