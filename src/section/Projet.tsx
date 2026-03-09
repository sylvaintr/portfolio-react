import { useParams, useNavigate } from "react-router-dom";
// import { useProjet } from "../hook/useProjet";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import Grid from "../components/GridWrapper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { apiprojet } from "../types/projet.ts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Projet() {
  const { id } = useParams();
  const navigate = useNavigate(); // Permet de gérer le bouton "Retour"

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
            position: "relative",
            overflow: "visible",
            // Espace à droite pour éviter que le contenu soit masqué par la vidéo flottante
            pr: { md: "420px" },
            // overflow: "hidden" retiré ici pour éviter de couper les ombres
          }}
        >
          {/* Vidéo flottante en haut à droite du Paper */}
          <Box
            sx={{
              // En petit écran la vidéo s'insère dans le flux (au-dessus du contenu),
              // en grand écran elle est absolue en haut à droite.
              position: { xs: "relative", md: "absolute" },
              top: { md: 20 },
              right: { md: 20 },
              width: { xs: "100%", sm: "45%", md: 360 },
              maxHeight: { xs: 220, md: 300 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
              zIndex: 2,
              mb: { xs: 3, md: 0 },
            }}
          >
            <video
              autoPlay
              loop
              muted
              controls
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            >
              <source
                src={`/video_projet/projet_${id}.webm`}
                type="video/webm"
              />
              Votre navigateur ne supporte pas les vidéos.
            </video>
          </Box>
          <Grid container spacing={4} alignItems="flex-start">
            {/* COLONNE GAUCHE (Texte) : Prend 7 colonnes sur 12 */}
            <Grid xs={12} md={7} component="div">
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

            {/* La vidéo est maintenant flottante en haut à droite du Paper */}
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
              component="div"
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data.longdescriptionfr}
              </ReactMarkdown>
            </Typography>
          </Box>

          {/* 3. SECTION BAS : TECHNOS & LIENS (Alignés, sans déborder) */}
          {/* J'ai utilisé alignItems="stretch" pour que les deux cartes aient la même hauteur naturellement */}
          <Grid container spacing={4} alignItems="stretch">
            {/* TECHNOLOGIES */}
            <Grid xs={12} md={6} component="div">
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
            <Grid xs={12} md={6} component="div">
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
                <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
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
