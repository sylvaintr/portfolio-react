import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Card_Projet from "../../components/Card_Projet";
import { useProjets } from "../../hook/useProjet";
import { useNavigate } from "react-router-dom";
import type { Projetshort } from "../../types/projet";

export default function ProjetSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: apiprojet, isLoading } = useProjets(3);
  return (
    <Box component="section">
      <Typography
        variant="h2"
        id="MY_PROJECTS"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
        }}
      >
        {t("MY_PROJECTS")}
      </Typography>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        {!isLoading &&
          (Array.isArray(apiprojet?.projets)
            ? apiprojet.projets.map((projet: Projetshort) => (
                <Card_Projet
                  key={projet.id}
                  name={projet.name}
                  shortDescription={projet.shortdescriptionfr}
                  technologies={projet.technologies ? projet.technologies : []}
                  id={projet.id}
                  left={projet.id % 2 === 0}
                />
              ))
            : null)}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#7ab2cb", mb: 4 }}
          onClick={() => {
            navigate("/projets");
          }}
        >
          <Typography sx={{ textDecoration: "none" }}>
            {t("SEE_ALL_PROJECTS")}
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
