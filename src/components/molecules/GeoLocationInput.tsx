import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField/TextField";
import { LatLng } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import { useGeocode } from "../../api/useGeocode";

interface GeoLocationInputProps
  extends Omit<BaseTextFieldProps, "onChange" | "value"> {
  setLocation: (location: LatLng | null) => void;
}

export const GeoLocationInput = ({
  setLocation,
  ...rest
}: GeoLocationInputProps) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const { data, error, isLoading } = useGeocode(debouncedValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (data?.results) {
      if (data.results.length > 0) {
        setLocation(data.results[0].geometry.location);
      }
      if (data.results.length === 0) {
        setLocation(null);
      }
    }
  }, [data, setLocation]);
  return <TextField {...rest} onChange={handleChange} value={value} />;
};
