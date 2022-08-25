import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { GeocoderResponse200 } from "../types";

const getGeocode = (search: string) =>
  axios
    .get<GeocoderResponse200>(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: search,
          key: process.env.REACT_APP_API_KEY,
        },
      }
    )
    .then((response) => response.data);

export const useGeocode = (search: string) =>
  useQuery<GeocoderResponse200, AxiosError>(
    [`geocode-${search}`],
    () => getGeocode(search),
    {
      enabled: !!search,
    }
  );
