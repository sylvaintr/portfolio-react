import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.ts";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "./assets/Theme.ts";
import { AuthProvider } from "./hook/AuthContext.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{ body: { fontFamily: `'Nunito', sans-serif` } }}
          />
          <RouterProvider router={routes} />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
