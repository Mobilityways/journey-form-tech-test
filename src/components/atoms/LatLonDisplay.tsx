import { Chip } from "@mui/material";
import { LatLng } from "../../types";

export const LatLonDisplay = ({ latLng }: { latLng: LatLng }) => {
  return <Chip label={`${latLng.lat}, ${latLng.lng}`} sx={{ my: 1 }} />;
};
