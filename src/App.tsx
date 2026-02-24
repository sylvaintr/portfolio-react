import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import AppBar from "./section/navBar";

import "./App.css";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fafbfc",
      }}
    >
      <AppBar />
      <Container
        sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}
        maxWidth="xl"
      >
        <Outlet />
      </Container>
    </Box>
  );
}
