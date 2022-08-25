import React, { useEffect, useRef } from "react";
import { LatLng } from "../../types";
import { Box } from "@mui/material";

interface GoogleMapProps {
  center: LatLng;
  zoom: number;
}

export const GoogleMap = ({ center, zoom }: GoogleMapProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    new window.google.maps.Map(ref.current as HTMLElement, {
      center,
      zoom,
    });
  });

  return <Box ref={ref} id="map" sx={{ width: "100%", height: "100%" }} />;
};
