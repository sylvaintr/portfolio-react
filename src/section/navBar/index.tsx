import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuLangue from "../../components/menuLangue";
import { useTranslation } from "react-i18next";
import React from "react";

const pages = [
  { name: "ABOUT_ME", path: "/#ABOUT_ME" },
  { name: "SKILLS", path: "/#SKILLS" },
  { name: "MY_PROJECTS", path: "/#MY_PROJECTS" },
  { name: "MY_EXPERIENCE", path: "/#MY_EXPERIENCE" },
  { name: "CV", path: "/#CV" },
];

export default function NavBar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#7ab2cb",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            content="h1"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
            component="a"
            href="/"
          >
            Portfolio {import.meta.env.VITE_NAME}
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                    component="a"
                    href={page.path}
                  >
                    {t(page.name)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(event) => setAnchorElNav(event.currentTarget)}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 200,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {import.meta.env.VITE_NAME}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  mx: 2,
                  my: "auto",
                  color: "white",
                  display: "block",
                }}
                component="a"
                href={page.path}
              >
                {t(page.name)}
              </Typography>
            ))}
          </Box>

          <MenuLangue />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
