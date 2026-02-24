import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjet } from "../hook/useProjet";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export default function Projet() {
  const { id } = useParams();
  const navigate = useNavigate(); // Permet de gérer le bouton "Retour"
  const apiprojet = {
    projets: [
      {
        id: 1,
        name: "protfolio",
        shortdescriptionfr:
          "Un portfolio personnel développé avec React et Material-UI, mettant en avant mes compétences, expériences et projets de manière moderne et responsive. avec une API en Go pour la gestion des données.",
        technologies: ["React", "Node.js", "Go", "SQL"],
        longdescriptionfr:
          "Ce projet de portfolio personnel a été conçu pour présenter mes compétences, expériences et réalisations de manière professionnelle et attrayante. Développé avec React pour une interface utilisateur dynamique et Material-UI pour un design moderne, il offre une navigation fluide et responsive sur tous les appareils. L'API en Go gère efficacement les données des projets, assurant une performance optimale. Ce portfolio met en avant mes projets phares, mes compétences techniques et mon parcours professionnel, offrant aux visiteurs une vue d'ensemble complète de mon expertise en développement web.",
        shortdescriptionen:
          "A personal portfolio developed with React and Material-UI, showcasing my skills, experiences, and projects in a modern and responsive way. It includes a Go API for data management.",
        longdescriptionen:
          "This personal portfolio project was designed to showcase my skills, experiences, and achievements in a professional and attractive manner. Developed with React for a dynamic user interface and Material-UI for a modern design, it offers smooth and responsive navigation across all devices. The Go API efficiently manages project data, ensuring optimal performance. This portfolio highlights my key projects, technical skills, and professional background, providing visitors with a comprehensive overview of my expertise in web development.",
        linkGithub: "https://github.com/sylvaintr/portfolio-react",
        linkWeb: "http://localhost:5173/",
      },
      {
        id: 2,
        name: "Projet B",
        shortdescriptionfr: "Description courte du projet B",
        technologies: ["Go", "MongoDB"],
      },
      {
        id: 3,
        name: "VHS Video Home Share",
        shortdescriptionfr:
          "VHS est une plateforme web interactive qui transforme le streaming solitaire en une expérience collective. En mélangeant nostalgie et technologie moderne, l'application recrée la convivialité des cinémas et des soirées télé d'autrefois.",
        technologies: ["php", "javascript", "twig", "SQL"],
      },
    ],
  };

  const isLoading = false;
  const data = apiprojet.projets.find((p) => p.id === Number(id));

  const primaryBlue = "#7ab2cb";

  // 1. ÉTAT DE CHARGEMENT PROPRE
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress sx={{ color: primaryBlue }} size={60} thickness={4} />
      </Box>
    );
  }

  // 2. GESTION DE L'ERREUR (Si le projet n'existe pas)
  if (!data) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Projet introuvable
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ color: primaryBlue }}
        >
          Retour aux projets
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6, bgcolor: "#fafbfc", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* BOUTON RETOUR */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 4, color: "#666", textTransform: "none" }}
        >
          Retour
        </Button>

        {/* GRAND CONTENEUR BLANC PRINCIPAL */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            border: "1px solid #eef2f6",
            bgcolor: "white",
            boxShadow: "0 12px 30px rgba(0,0,0,0.03)",
            // overflow: "hidden" retiré ici pour éviter de couper les ombres
          }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            {/* COLONNE GAUCHE (Texte) : Prend 7 colonnes sur 12 */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#2c3e50",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                {data.name}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: primaryBlue, fontWeight: 400, lineHeight: 1.6 }}
              >
                {data.shortdescriptionfr}
              </Typography>
            </Grid>

            {/* COLONNE DROITE (Vidéo) : Prend 5 colonnes sur 12 */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  bgcolor: "#444", // Fond sombre élégant
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  style={{
                    width: "100%",
                    maxHeight: "300px", // Hauteur max de la vidéo
                    display: "block",
                    objectFit: "contain",
                  }}
                >
                  <source
                    src={`/video_projet/projet_${id}.mp4`}
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas les vidéos.
                </video>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6, borderColor: "#f0f0f0" }} />

          {/* 2. SECTION MILIEU : DESCRIPTION LONGUE (Prend toute la largeur) */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 3, color: "#333" }}
            >
              À propos de ce projet
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                whiteSpace: "pre-line",
              }}
            >
              {data.longdescriptionfr}
            </Typography>
          </Box>

          {/* 3. SECTION BAS : TECHNOS & LIENS (Alignés, sans déborder) */}
          {/* J'ai utilisé alignItems="stretch" pour que les deux cartes aient la même hauteur naturellement */}
          <Grid container spacing={4} alignItems="stretch">
            {/* TECHNOLOGIES */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "#f8fafd",
                  borderRadius: 3,
                  border: "1px solid #e8f0f4",
                  height: "100%", // Permet à la carte de prendre toute la hauteur disponible de la grille
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "#333" }}
                >
                  Technologies utilisées
                </Typography>
                {data.technologies && data.technologies.length > 0 ? (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {data.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        sx={{
                          bgcolor: "white",
                          color: primaryBlue,
                          fontWeight: 600,
                          border: "1px solid",
                          borderColor: "rgba(122, 178, 203, 0.3)",
                          py: 1,
                        }}
                      />
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    Non spécifié
                  </Typography>
                )}
              </Paper>
            </Grid>

            {/* LIENS */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "#f8fafd",
                  borderRadius: 3,
                  border: "1px solid #e8f0f4",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "#333" }}
                >
                  Liens du projet
                </Typography>
                <Stack
                  spacing={2}
                  direction={{ xs: "column", sm: "row" }}
                  flexWrap="wrap"
                  useFlexGap
                >
                  {data.linkWeb && (
                    <Button
                      variant="contained"
                      startIcon={<LanguageIcon />}
                      href={data.linkWeb}
                      target="_blank"
                      disableElevation
                      sx={{
                        bgcolor: primaryBlue,
                        textTransform: "none",
                        borderRadius: 2,
                        py: 1,
                        px: 3,
                        "&:hover": { bgcolor: "#689cb5" },
                      }}
                    >
                      Voir le site en direct
                    </Button>
                  )}

                  {data.linkGithub && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={data.linkGithub}
                      target="_blank"
                      sx={{
                        color: "#444",
                        borderColor: "#ccc",
                        textTransform: "none",
                        borderRadius: 2,
                        py: 1,
                        px: 3,
                        "&:hover": { borderColor: "#333", bgcolor: "white" },
                      }}
                    >
                      Code source (GitHub)
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
