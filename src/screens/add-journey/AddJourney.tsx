import React, { useState } from "react";
import { Grid } from "@mui/material";
import { GoogleMapWrapper } from "../../components/atoms/GoogleMapWrapper";
import { GoogleMap } from "../../components/atoms/GoogleMap";
import { Marker } from "../../components/atoms/Marker";
import { LatLng } from "../../types";
import { GeoLocationInput } from "../../components/molecules/GeoLocationInput";

export const AddJourney = () => {
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item md={5}>
        <form>
          <GeoLocationInput setLocation={setOrigin} label="Origin" />
          <GeoLocationInput setLocation={setDestination} label="Destination" />
          <pre>{JSON.stringify({ origin, destination }, null, 2)}</pre>
        </form>
      </Grid>
      <Grid item md={7}>
        <GoogleMapWrapper>
          <GoogleMap
            center={{ lat: 53.4462023, lng: -2.2649167 }}
            zoom={6}
            markers={[origin, destination]}
          >
            <Marker position={origin} />
            <Marker position={destination} />
          </GoogleMap>
        </GoogleMapWrapper>
      </Grid>
    </Grid>
  );
};
