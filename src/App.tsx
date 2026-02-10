import { Outlet } from "react-router-dom";
import { Container, Typography, Box, IconButton, Stack } from "@mui/material";
import AppBar from "./section/navBar";

import "./App.css";
import Footer from "./section/footer";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar />
      <Container
        sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
