import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";

export default function AboutSection() {
  const { t } = useTranslation();
  const skills = [
    {
      name: "Frontend",
      icon: <DevicesIcon sx={{ fontSize: 40, color: "#7ab2cb" }} />,
      desc: "React, MUI, Tailwind",
    },
    {
      name: "Backend",
      icon: <StorageIcon sx={{ fontSize: 40, color: "#ff4081" }} />,
      desc: "Node.js, Go, SQL",
    },
    {
      name: "Outils",
      icon: <CodeIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
      desc: "Git, Docker, Figma",
    },
  ];
  return (
    <>
      <Typography
        variant="h2"
        id="ABOUT_ME"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
        }}
      >
        {t("ABOUT_ME")}
      </Typography>
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* PARTIE GAUCHE : LE TEXTE */}
          <Grid item xs={12} md={6}>
            {/* Titre propre sans la grosse barre grise */}
            <Typography
              variant="h3"
              fontWeight="800"
              sx={{ mb: 3, color: "#2c3e50" }}
            >
              À propos de{" "}
              <Box component="span" sx={{ color: "#7ab2cb" }}>
                moi
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8, mb: 2 }}
            >
              Étudiant en troisième année de BUT Informatique à Anglet.
              Passionné par le développement, j'aime explorer les nouvelles
              technologies et résoudre des problèmes complexes.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8 }}
            >
              Mon objectif est de concevoir des applications performantes qui
              ont un réel impact utilisateur. Quand je ne code pas, je fais de
              la veille technologique sur l'écosystème Go et React.
            </Typography>
          </Grid>

          {/* PARTIE DROITE : REMPLACEMENT DE LA PHOTO PAR DES "CARTES COMPETENCES" */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: "#f9f9f9",
                      borderRadius: 4,
                      border: "1px solid #eee",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                        borderColor: "#7ab2cb",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{skill.icon}</Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ alignItems: "center" }}
        spacing={2}
        mb={4}
      >
        <Box>
          <Typography sx={{ textAlign: "justify" }}>
            {t("Paragraph1_ABOUT_ME")}
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            {t("Paragraph2_ABOUT_ME")}
          </Typography>
        </Box>
        <Avatar
          alt="Sylvain Trouilh"
          src="/avatar.jpeg"
          sx={{ width: 300, height: 300, borderRadius: "50%" }}
        />
      </Stack>
    </>
  );
}
