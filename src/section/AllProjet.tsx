import {
  Pagination,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useProjets } from "../hook/useProjet";
import { useState } from "react";

export default function AllProjet() {
  const [page, setPage] = useState(1);

  const { data: projets } = useProjets(10, page);
  console.log(projets);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}
    >
      {projets &&
        projets.projets.map((projet) => (
          <Card sx={{ minWidth: 275, mt: 5 }} key={projet.id}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ width: "30%", flexShrink: 0 }}>
                  <video
                    autoPlay
                    loop
                    muted
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  >
                    <source
                      src={`./video_projet/projet_1.mp4`}
                      type="video/mp4"
                    />
                    Votre navigateur ne supporte pas les vidéos.
                  </video>
                </Box>

                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      {projet.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {projet.shortdescriptionfr}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {projet?.technologies?.map((tech, index) => {
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
                              bgcolor:
                                colorPalette[index % colorPalette.length],
                              color: "#fff",
                            }}
                          />
                        );
                      })}
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}
                  >
                    <Button size="small">Learn More</Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}

      <Box
        sx={{ display: "flex", justifyContent: "center", mt: "auto", mb: 2 }}
      >
        <Pagination
          count={projets?.count ? Math.ceil(projets.count / 10) : 0}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
