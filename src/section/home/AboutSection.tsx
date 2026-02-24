import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

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

      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ alignItems: "center" }}
        spacing={2}
        mb={4}
      >
        <Box>
          <Typography sx={{ textAlign: "justify", fontSize: "1.1rem" }} variant="body1" component="p">
            {t("Paragraph1_ABOUT_ME")}
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify", fontSize: "1.1rem" }} variant="body1" component="p">
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
