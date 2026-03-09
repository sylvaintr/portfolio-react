import { Box, Typography } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
import { useTranslation } from "react-i18next";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function CVSection() {
  const { t } = useTranslation();
  return (
    <Box component="section">
      <Typography
        variant="h2"
        id="CV"
        sx={{
          bgcolor: "#d8d7d7",
          py: 1,
          mb: 4,
          borderLeft: "10px solid #d8d7d7",
          scrollMarginTop: "80px",
        }}
      >
        {t("CV")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Document file="/cv.pdf">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Box>
    </Box>
  );
}
