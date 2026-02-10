import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";

export default function HeroSection() {
  const { t } = useTranslation();
  const primaryBlue = "#7ab2cb"; // Ta couleur principale

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #eef2f3 100%)", // Dégradé plus subtil
        py: { xs: 8, md: 12 },
        mb: 8,
        minHeight: "80vh", // Prend 100% de la hauteur de l'écran visible
        display: "flex", // Active flexbox
        alignItems: "center", // Centre le contenu verticalement
        pt: { xs: 8, md: 0 }, // Un peu de padding en haut sur mobile, 0 sur PC car centré
        px: 2,
        borderRadius: "0 0 60px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Texte à gauche */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="overline"
              sx={{
                color: primaryBlue,
                fontWeight: "bold",
                letterSpacing: 3,
                fontSize: "0.9rem",
              }}
            >
              PORTFOLIO
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "5rem" }, // Plus grand pour l'impact
                fontWeight: 800,
                color: "#2c3e50",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Sylvain <br />
              <Box component="span" sx={{ color: primaryBlue }}>
                Trouilh
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#666",
                mb: 4,
                fontWeight: 400,
                maxWidth: "600px",
              }}
            >
              Développeur Full Stack passionné par la création d'expériences web
              modernes et intuitives.
            </Typography>

            {/* Boutons d'action */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  color: "#555",
                  borderColor: "#ccc",
                  borderRadius: "20px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: primaryBlue,
                    color: primaryBlue,
                    bgcolor: "transparent",
                  },
                }}
              >
                Télécharger CV
              </Button>
            </Stack>
          </Box>

          {/* Image / Avatar à droite */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            {/* Remplace le src par ta photo */}
            <Box
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Forme organique moderne
                bgcolor: "white",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                overflow: "hidden",
                border: `4px solid ${primaryBlue}`,
                backgroundImage: "url('/avatar.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
