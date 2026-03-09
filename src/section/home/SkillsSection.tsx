import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// Direct import is the "gold standard" for MUI v5 to avoid Type Overload issues
import Grid from "../../components/GridWrapper";

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Material UI",
      "Tailwind",
      "Bootstrap",
      "angular",
    ],
  },
  {
    title: "Back-end & BDD",
    skills: [
      "Node.js",
      "Go",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "PHP",
      "Laravel",
      "Java",
      "c/c++",
    ],
  },
  {
    title: "Outils",
    skills: ["Git", "Docker", "Jira", "Bash", "Figma", "Github/actions"],
  },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const primaryBlue = "#7ab2cb";

  return (
    <Box sx={{ py: 4, bgcolor: "#fafbfc" }}>
      <Typography
        variant="h2"
        id="SKILLS"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
          scrollMarginTop: "80px",
        }}
      >
        {t("SKILLS")}
      </Typography>

      <Stack spacing={4} sx={{ pl: 12 }}>
        <Grid container spacing={5} sx={{ mt: 2 }}>
          {skillCategories.map((category, index) => (
            <Grid xs={12} md={4} key={index} component="div">
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: "#444",
                    fontWeight: 600,
                    borderBottom: `3px solid ${primaryBlue}`,
                    display: "inline-block",
                    pb: 0.5,
                  }}
                >
                  {category.title}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {category.skills.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        px: 2.5,
                        py: 1,
                        bgcolor: "white",
                        borderRadius: 2,
                        border: "1px solid #eaeaea",
                        color: "#555",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                        transition: "all 0.2s ease-in-out",
                        cursor: "default",
                        "&:hover": {
                          borderColor: primaryBlue,
                          color: primaryBlue,
                          bgcolor: "rgba(122, 178, 203, 0.05)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 15px rgba(122, 178, 203, 0.15)",
                        },
                      }}
                    >
                      {s}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
