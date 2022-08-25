import React, { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Alert, CircularProgress } from "@mui/material";

interface GoogleMapWrapperProps {
  children: ReactElement;
}

export const GoogleMapWrapper = ({ children }: GoogleMapWrapperProps) => {
  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE)
      return <Alert severity="error">Sorry, error loading Google Maps</Alert>;
    return <CircularProgress />;
  };

  return (
    <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
      {children}
    </Wrapper>
  );
};
