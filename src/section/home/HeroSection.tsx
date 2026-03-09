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
          alignItems={{ xs: "center", md: "stretch" }}
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

          {/* Image / Graphique à droite */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 600 600"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Graphic"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7ab2cb">
                    <animate
                      attributeName="stop-color"
                      values="#7ab2cb;#9b59b6;#7ab2cb"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#f76c6c">
                    <animate
                      attributeName="stop-color"
                      values="#bfeaf8;#f76c6c;#bfeaf8"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>

                <radialGradient id="rg" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#ffd166" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
                </radialGradient>

                <filter id="fblur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background soft radial light */}
              <rect
                x="0"
                y="0"
                width="600"
                height="600"
                fill="url(#rg)"
                opacity="0.9"
              />

              <g transform="translate(300,300)">
                <g filter="url(#glow)">
                  <path
                    d="M150 -140C200 -100 230 -50 240 10C250 70 220 120 170 150C120 180 60 190 10 170C-40 150 -90 110 -130 70C-170 30 -210 -10 -210 -60C-210 -110 -170 -150 -120 -180C-70 -210 -10 -220 50 -200C110 -180 100 -180 150 -140Z"
                    fill="url(#g1)"
                    opacity="0.95"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      values="1;1.05;1"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -18; 0 0"
                      dur="6s"
                      additive="sum"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                <g transform="rotate(0)">
                  <path
                    d="M120 -120C160 -90 190 -50 200 -10C210 30 190 70 150 100C110 130 60 150 10 140C-40 130 -80 100 -120 70C-160 40 -190 0 -190 -40C-190 -80 -160 -120 -120 -140C-80 -160 -40 -170 0 -160C40 -150 80 -140 120 -120Z"
                    fill="#6ee7b7"
                    opacity="0.18"
                    filter="url(#fblur)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0;15;0"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 12 6; 0 0"
                      dur="8s"
                      additive="sum"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                <g>
                  <circle
                    cx="-160"
                    cy="-120"
                    r="12"
                    fill="#ffd166"
                    opacity="0.95"
                  >
                    <animate
                      attributeName="r"
                      values="8;14;8"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="160" cy="140" r="8" fill="#f76c6c" opacity="0.95">
                    <animate
                      attributeName="cx"
                      values="160;140;160"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values="140;120;140"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                <g fill="#fff" opacity="0.9">
                  <circle r="3" cx="-40" cy="-10">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 40 -20; 0 0"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="2" cx="80" cy="20">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; -60 30; 0 0"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="2.5" cx="20" cy="90" fill="#e0f7fa">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; -20 -60; 0 0"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
