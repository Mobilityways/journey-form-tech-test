import React from "react";
import { Grid } from "@mui/material";
import { AddJourneyForm } from "./AddJourneyForm";
import { GoogleMapWrapper } from "../../components/atoms/GoogleMapWrapper";
import { GoogleMap } from "../../components/atoms/GoogleMap";

export const AddJourney = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item md={5}>
        <AddJourneyForm />
      </Grid>
      <Grid item md={7}>
        <GoogleMapWrapper>
          <GoogleMap center={{ lat: 53.4462023, lng: -2.2649167 }} zoom={12} />
        </GoogleMapWrapper>
      </Grid>
    </Grid>
  );
};
