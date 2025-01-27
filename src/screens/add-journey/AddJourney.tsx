import React, { useState } from "react";
import axios from "axios";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { GoogleMapWrapper } from "../../components/atoms/GoogleMapWrapper";
import { GoogleMap } from "../../components/atoms/GoogleMap";
import { Marker } from "../../components/atoms/Marker";
import { LatLng } from "../../types";
import { GeoLocationInput } from "../../components/molecules/GeoLocationInput";
import { LatLonDisplay } from "../../components/atoms/LatLonDisplay";

export const AddJourney = () => {
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: real submit endpoint
    axios.post("/wherever", { origin, destination, departureDate, returnDate });
  };

  const formOk = origin && destination && departureDate && returnDate;

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item md={5}>
        <form>
          <Grid container spacing={4} sx={{ p: 2 }}>
            <Grid item sm={12}>
              <Typography variant="h3" gutterBottom>
                Add your journey
              </Typography>
              <Typography variant="body1">
                Whether you're looking to Liftshare as a driver or a passenger,
                listing your journey is the best way to find a match.
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <GeoLocationInput setLocation={setOrigin} label="Origin" />
              {origin && <LatLonDisplay latLng={origin} />}
            </Grid>
            <Grid item sm={12}>
              <GeoLocationInput
                setLocation={setDestination}
                label="Destination"
              />
              {destination && <LatLonDisplay latLng={destination} />}
            </Grid>
            <Grid item sm={6}>
              <DatePicker
                label="Departure Date"
                value={departureDate}
                onChange={(newValue) => {
                  setDepartureDate(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>
            <Grid item sm={6}>
              <DatePicker
                label="Return Date"
                value={returnDate}
                onChange={(newValue) => {
                  setReturnDate(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>
            <Grid item sm={12}>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                size="large"
                disabled={!formOk}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
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
