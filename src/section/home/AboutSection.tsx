import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const primaryBlue = "#7ab2cb";
  const isWide = useMediaQuery("(min-width:1000px)");

  return (
    <Box component="section">
      <Typography
        variant="h2"
        id="ABOUT_ME"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
          scrollMarginTop: "80px",
        }}
      >
        {t("ABOUT_ME")}
      </Typography>

      <Stack
        direction={isWide ? "row" : "column"}
        sx={{
          alignItems: isWide ? "flex-start" : "center",
          pl: isWide ? 12 : 2,
        }}
        spacing={2}
        mb={4}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{ textAlign: "justify", fontSize: "1.1rem" }}
            variant="body1"
            component="p"
          >
            {t("Paragraph1_ABOUT_ME")}
          </Typography>
          <br />
          <Typography
            sx={{ textAlign: "justify", fontSize: "1.1rem" }}
            variant="body1"
            component="p"
          >
            {t("Paragraph2_ABOUT_ME")}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: 320, md: 380 },
            height: { xs: 220, md: 380 },
            minHeight: { xs: 220, md: 380 },
            maxWidth: { md: 380 },
            flexShrink: 0,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            bgcolor: "white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            overflow: "hidden",
            border: `4px solid ${primaryBlue}`,
            backgroundImage: "url('/avatar.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "block",
            ml: { sm: 2 },
          }}
        ></Box>
      </Stack>
    </Box>
  );
}
