import { Grid } from "@mui/material";
import React from "react";
import Course from "./Course";

interface Props {
  showButtons?: boolean;
}

export default function ListCourses(props: Props) {
  return (
    <div>
      <div className="section">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Course showButtons={props.showButtons} />
          </Grid>
          <Grid item xs={4}>
            <Course showButtons={props.showButtons} />
          </Grid>
          <Grid item xs={4}>
            <Course showButtons={props.showButtons} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
