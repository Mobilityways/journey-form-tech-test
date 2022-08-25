import React, { useState } from "react";
import axios from "axios";
import { Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { GoogleMapWrapper } from "../../components/atoms/GoogleMapWrapper";
import { GoogleMap } from "../../components/atoms/GoogleMap";
import { Marker } from "../../components/atoms/Marker";
import { LatLng } from "../../types";
import { GeoLocationInput } from "../../components/molecules/GeoLocationInput";

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
          <GeoLocationInput setLocation={setOrigin} label="Origin" />
          <GeoLocationInput setLocation={setDestination} label="Destination" />
          <DatePicker
            label="Departure Date"
            value={departureDate}
            onChange={(newValue) => {
              setDepartureDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Return Date"
            value={returnDate}
            onChange={(newValue) => {
              setReturnDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
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
