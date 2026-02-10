import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

export default function MenuLangue() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Button
        variant="outlined"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          borderColor: "#7ab2cb",
          fontSize: 25,
        }}
      >
        <img
          src={`drapeau/${i18n.language}.webp`}
          alt={`drapeau ${i18n.language}`}
          style={{ width: "30px", height: "20px", marginRight: "8px" }}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            i18n.changeLanguage("fr");
          }}
        >
          <img
            src="drapeau/fr.webp"
            alt={t("FRENCH")}
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          {t("french")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            i18n.changeLanguage("en");
          }}
        >
          <img
            src="drapeau/en.webp"
            alt={t("ENGLISH")}
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          {t("english")}
        </MenuItem>
      </Menu>
    </div>
  );
}
