import React, { useState } from "react";
import { GeoLocationInput } from "../../components/molecules/GeoLocationInput";
import { LatLng } from "../../types";

export const AddJourneyForm = () => {
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);

  return (
    <form>
      <GeoLocationInput setLocation={setOrigin} label="Origin" />
      <GeoLocationInput setLocation={setDestination} label="Destination" />
      <pre>{JSON.stringify({ origin, destination }, null, 2)}</pre>
    </form>
  );
};
