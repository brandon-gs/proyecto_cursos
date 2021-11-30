import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

export default function ButtonNewCourse() {
  return (
    <IconButton color="success" sx={{ float: "right" }}>
      <AddCircleIcon
        fontSize="large"
        sx={{
          fontSize: 56,
        }}
      />
    </IconButton>
  );
}
