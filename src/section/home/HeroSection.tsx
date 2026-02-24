import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function HeroSection() {
  const primaryBlue = "#7ab2cb"; // Ta couleur principale

  // Définition des liens (remplace les href par tes vrais liens)
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      url: import.meta.env.VITE_LINK_TO_LINKEDIN,
      color: "#0077b5", // Couleur officielle LinkedIn
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      url: import.meta.env.VITE_LINK_TO_GITHUB,
      color: "#333", // Couleur officielle GitHub
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      url: `mailto:${import.meta.env.VITE_MAIL}`,
      color: "#ea4335", // Couleur Gmail/Rouge
      text: import.meta.env.VITE_MAIL,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #eef2f3 100%)",
        py: { xs: 8, md: 12 },
        mb: 8,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 },
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
                fontSize: { xs: "3rem", md: "5rem" },
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
                mx: { xs: "auto", md: 0 }, // Centre le texte sur mobile
              }}
            >
              Développeur Full Stack passionné par la création d'expériences web
              modernes et intuitives.
            </Typography>

            {/* Zone des Boutons (CV + Réseaux Sociaux) */}
            <Stack
              direction={{ xs: "column", sm: "row" }} // Colonne sur mobile, ligne sur PC
              spacing={3} // Espace entre le bouton CV et les icônes
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {/* Bouton CV */}
              <Button
                variant="outlined"
                size="large"
                href="/cv.pdf" // Mets le lien vers ton CV ici
                target="_blank"
                startIcon={<DownloadIcon />}
                sx={{
                  color: "#555",
                  borderColor: "#ccc",
                  borderRadius: "20px",
                  px: 2,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  "&:hover": {
                    borderColor: primaryBlue,
                    color: primaryBlue,
                    bgcolor: "rgba(122, 178, 203, 0.1)",
                    transform: "translateY(-2px)", // Petit effet de levée
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Télécharger CV
              </Button>

              {/* Barre séparatrice verticale (visible uniquement sur écran large) */}
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  height: "30px",
                  width: "1px",
                  bgcolor: "#ddd",
                }}
              />

              {/* Icônes Réseaux Sociaux */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, index) => {
                  const hasText = !!social.text;
                  const baseSx = {
                    color: "#555",
                    bgcolor: "white",
                    border: "1px solid #eee",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    "&:hover": {
                      color: social.color,
                      bgcolor: "white",
                      transform: "translateY(-3px)",
                      borderColor: social.color,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  };

                  const textSx = {
                    border: `1px solid ${primaryBlue}`,
                    borderColor: "#ccc",
                    borderRadius: "20px",
                    p: 1.2,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                    "&:hover": {
                      borderColor: primaryBlue,
                      color: primaryBlue,
                      bgcolor: "rgba(122, 178, 203, 0.1)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                    },
                  };

                  return (
                    <Tooltip title={social.label} key={index} arrow>
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={hasText ? { ...baseSx, ...textSx } : baseSx}
                      >
                        {social.icon}
                        {hasText && (
                          <Typography
                            variant="body2"
                            sx={{
                              ml: 1,
                              color: "#555",
                              fontSize: "0.95rem",
                              display: { xs: "none", sm: "inline" },
                            }}
                          >
                            {social.text}
                          </Typography>
                        )}
                      </IconButton>
                    </Tooltip>
                  );
                })}
              </Stack>
            </Stack>
          </Box>

          {/* Image / Avatar à droite */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
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
