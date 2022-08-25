import React from "react";
import {Grid} from "@mui/material";
import {AddJourneyForm} from "./AddJourneyForm";

export const AddJourney = () => {
    return (
        <Grid container>
            <Grid md={5}>
                <AddJourneyForm />
            </Grid>
            <Grid md={7}>
                TODO: Map here
            </Grid>
        </Grid>
    );
};
