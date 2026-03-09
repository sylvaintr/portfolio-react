import {
  Box,
  Typography,
  Paper,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";

// Tes données
const experiences = [
  {
    title: "Développeur Front-end (stage 4 mois) ",
    company: "TotalEnergies",
    date: "mars 2026 - juin 2026",
    icon: <LaptopMacIcon />,
    technos: ["React", "Node.js", "typescript"],
    desc: "Développement d'applications web pour  aider la mise en place du finOps",
  },
  {
    title: "Développeur Front-end (stage 2 mois)",
    company: "TotalEnergies",
    date: "avril 2025 - juin 2025",
    icon: <WorkIcon />,
    technos: ["TypeScript", "React", "Material UI"],
    desc: "Développement d'applications web pour  aider la mise en place du finOps",
  },
  {
    title: "BUT Informatique",
    company: "IUT de Bayonne",
    date: "2023 - 2025",
    icon: <SchoolIcon />,
    technos: [
      "Java",
      "SQL",
      "Algo",
      "Gestion de projet",
      "Git",
      "Docker",
      "c/c++",
    ],
    desc: "Apprentissage des bases de l'ingénierie logicielle et gestion de projet.",
  },
];

export default function ExperienceTimeline() {
  const theme = useTheme();
  const { t } = useTranslation();
  // Détecte si on est sur mobile pour changer l'affichage
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const primaryBlue = "#7ab2cb";

  return (
    <Box sx={{ bgcolor: "#fff" }} id="experience">
      {/* TITRE */}
      <Typography
        variant="h2"
        id="MY_EXPERIENCE"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
          scrollMarginTop: "80px",
        }}
      >
        {t("MY_EXPERIENCE")}
      </Typography>

      {/* TIMELINE */}
      {/* 'position="alternate"' crée l'effet zig-zag automatiquement */}
      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={{ bgcolor: "#fafbfc" }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            {/* LA DATE (s'affiche en face du contenu sur PC) */}
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                display: isMobile ? "none" : "block", // On cache la date opposée sur mobile pour la mettre dans la carte
                color: "#666",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {exp.date}
            </TimelineOppositeContent>

            {/* LE SÉPARATEUR CENTRAL */}
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: primaryBlue }} />
              <TimelineDot
                sx={{
                  bgcolor: primaryBlue,
                  p: 2,
                  boxShadow: "0 0 0 4px rgba(122, 178, 203, 0.2)", // Petit effet de halo autour du point
                }}
              >
                {exp.icon}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: primaryBlue }} />
            </TimelineSeparator>

            {/* LE CONTENU (LA CARTE) */}
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 4,
                  textAlign: "left",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                  transition: "all 0.3s ease",
                  borderTop: `4px solid ${primaryBlue}`, // Petite touche de couleur en haut de la carte
                }}
              >
                {/* Sur mobile, on affiche la date DANS la carte car il n'y a pas de place à côté */}
                {isMobile && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#888",
                      display: "block",
                      mb: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {exp.date}
                  </Typography>
                )}

                <Typography variant="h6" component="span" fontWeight="bold">
                  {exp.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: primaryBlue, mb: 1 }}
                >
                  {exp.company}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {exp.desc}
                </Typography>

                {/* Chips technologies */}
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}
                >
                  {exp.technos.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{ bgcolor: "#f0f4f8", color: "#555" }}
                    />
                  ))}
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
