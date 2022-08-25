import React, { ReactNode, useEffect, useRef, useState } from "react";
import { LatLng } from "../../types";
import { Box } from "@mui/material";

interface GoogleMapProps {
  center: LatLng;
  zoom: number;
  markers: (LatLng | null)[];
  children?: ReactNode;
}

export const GoogleMap = ({
  center,
  zoom,
  markers,
  children,
}: GoogleMapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  // Initialise the map
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { maxZoom: 18 }));
    }
  }, [ref, map]);

  // Set default center & zoom
  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom });
    }
  }, [center, zoom, map]);

  // Fit map to makers
  useEffect(() => {
    if (markers.some((marker) => marker !== null)) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => marker && bounds.extend(marker));
      if (map) map.fitBounds(bounds);
    }
  }, [markers, map]);

  return (
    <>
      <Box ref={ref} id="map" sx={{ width: "100%", height: "100%" }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};
