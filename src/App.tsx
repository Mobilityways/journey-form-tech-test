import React from "react";
import "./App.css";
import { AddJourney } from "./screens/add-journey/AddJourney";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AddJourney />
      </div>
    </QueryClientProvider>
  );
}

export default App;
