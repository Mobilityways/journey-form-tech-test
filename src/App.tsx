import React from "react";
import "./App.css";
import { AddJourney } from "./screens/add-journey/AddJourney";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <div className="App">
        <AddJourney />
      </div>
    </QueryClientProvider>
  );
}

export default App;
