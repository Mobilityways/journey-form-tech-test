import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddJourney } from "./screens/add-journey/AddJourney";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <div className="App">
          <AddJourney />
        </div>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
