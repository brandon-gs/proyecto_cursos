import type { NextPage } from "next";
import useAuthPage from "../hooks/useAuthPage";
import ButtonAppBar from "../components/AppBar";
import ListCourses from "../components/ListCourses";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  const { email } = useAuthPage();

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="md">
        <h1>Bienvendo {email}</h1>
        <ListCourses />
      </Container>
    </div>
  );
};

export default Home;
