import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";

export default function RetourEnHaut() {
  const navigate = useNavigate(); // Permet de gérer le bouton "Retour en haut"
  return (
    <Fab
      aria-label="retour-en-haut"
      onClick={() => {
        // Navigue vers la page d'accueil et tente un scroll doux
        navigate("/");
        try {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (e) {}
      }}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1400,
        backgroundColor: "#7ab2cb",
        color: "white",
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}
