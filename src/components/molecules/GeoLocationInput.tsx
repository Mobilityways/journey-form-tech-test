import React, { useEffect, useState } from "react";
import { CircularProgress, InputAdornment, TextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField/TextField";
import { LatLng } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import { useGeocode } from "../../api/useGeocode";
import { CheckCircle, Error, MyLocation } from "@mui/icons-material";

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
  const { data, error, isFetching } = useGeocode(debouncedValue);
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

  const isError = Boolean(error || (data?.results && data.results.length < 1));

  const adornment = () => {
    if (isFetching) return <CircularProgress size={24} />;
    if (data?.results && data.results.length > 0)
      return <CheckCircle color="success" />;
    if (isError) return <Error color="error" />;
    return <MyLocation />;
  };

  return (
    <TextField
      {...rest}
      fullWidth
      onChange={handleChange}
      value={value}
      error={isError}
      helperText={isError && "Couldn't find address"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{adornment()}</InputAdornment>
        ),
      }}
    />
  );
};
