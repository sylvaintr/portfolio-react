import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Card_Projet({
  name,
  shortDescription,
  technologies,
  id,
  left,
}: {
  name: string;
  shortDescription: string;
  technologies: string[];
  id: number;
  left: boolean;
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: left ? "row-reverse" : "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        px: "5vw",
        py: "3%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 20px 10px rgba(134, 104, 255, 0.3)",
          zIndex: 2,
          left: { xs: "-30px", md: left ? "-30px" : "30px" },
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        >
          <source src={`./video_projet/projet_${id}.mp4`} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video>
      </Box>
      <Paper
        elevation={3}
        sx={{
          zIndex: 1,
          position: "relative",
          width: { xs: "100%", md: "50%" },
          borderRadius: "16px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          left: { xs: "0px", md: left ? "15px" : "-15px" },
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {name}
          </Typography>

          <Typography variant="body1" component="p">
            {shortDescription}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 2,
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              color: "rgb(84, 84, 255)",
              fontWeight: 500,
            }}
          ></Typography>
          {technologies.map((tech, index) => {
            const colorPalette = [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#009688",
              "#4caf50",
              "#8bc34a",
              "#ff9800",
              "#ff5722",
              "#795548",
            ];
            return (
              <Chip
                key={index}
                label={tech}
                sx={{
                  m: 1,
                  bgcolor: colorPalette[index % colorPalette.length],
                  color: "#fff",
                }}
              />
            );
          })}
          <Button
            onClick={() => {
              navigate(`/projet/${id}`);
            }}
          >
            {t("show_more")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
