/**
 * A latitude / longitude location
 */
export type LatLng = {
  lat: number;
  lng: number;
};

/**
 * Google Geocoder API response
 */
export interface GeocoderResponse200 {
  results: GeocoderResult[];
}

interface GeocoderResult {
  geometry: {
    location: LatLng;
  };
}
