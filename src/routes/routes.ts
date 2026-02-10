import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";



const App = lazy(() => import("../App"));
const Home = lazy(() => import("../section/Home"));
const NotFound = lazy(() => import("../section/404"));
const Projet = lazy(() => import("../section/Projet"));
const CreateProjet = lazy(() => import("../section/admin/projet/create"));
const Auth = lazy(() => import("../section/Auth"));
const EditProjet = lazy(() => import("../section/admin/projet/edit"));
const AllProjets = lazy(() => import("../section/AllProjet"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home
      },
      {
        path: "projets",
        Component: AllProjets
      },
      {
        path: "/projet/:id",
        Component: Projet
      },
      {
        path: "admin",
        Component: Auth,
        children: [
          {
            path: "projet",
            children: [
              {
                path: "create",
                Component: CreateProjet
              },
              {
                path: "edit/:id",
                Component: EditProjet
              }
            ]
          },
        ]
      },
      {
        path: "*",
        Component: NotFound,
      },
    ]

  },


]);

export default routes;
