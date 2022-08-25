import React, { ReactNode, useEffect, useRef, useState } from "react";
import { LatLng } from "../../types";
import { Box } from "@mui/material";

interface GoogleMapProps {
  center: LatLng;
  zoom: number;
  children?: ReactNode;
}

export const GoogleMap = ({ center, zoom, children }: GoogleMapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom });
    }
  }, [center, zoom, map]);

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
