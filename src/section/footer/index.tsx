import { Box, Stack, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer>
      <Box sx={{ bgcolor: "#7ab2cb", p: 2 }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1" color="white">
            © {new Date().getFullYear()} Portfolio TROUILH Sylvain
          </Typography>
          <Box>
            <a
              href="mailto:sylvain.trouilh@example.com"
              style={{
                color: "white",
                textDecoration: "none",
                display: "inline-block",
                marginLeft: 8,
              }}
              aria-label="Email"
            >
              <Typography variant="body1" color="white" component="span">
                Email: {import.meta.env.VITE_MAIL}
              </Typography>
            </a>
            <IconButton
              component="a"
              href={import.meta.env.VITE_LINK_TO_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href={import.meta.env.VITE_LINK_TO_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </footer>
  );
}
