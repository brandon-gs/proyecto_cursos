import type { NextPage } from "next";
import React from "react";
import { Container, Typography } from "@mui/material";
import useAuthPage from "../../hooks/useAuthPage";
import { Box } from "@mui/system";
import ButtonAppBar from "../../components/AppBar";
import ListCourses from "../../components/ListCourses";
import ButtonNewCourse from "../../components/ButtonNewCourse";

const UserCourses: NextPage = () => {
  const { email } = useAuthPage();

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="md">
        <Box py={3}>
          <Typography component="h1" variant="h3" align="left">
            Tus cursos
            <ButtonNewCourse />
          </Typography>
        </Box>
        <ListCourses showButtons={true} />
      </Container>
    </>
  );
};

export default UserCourses;
