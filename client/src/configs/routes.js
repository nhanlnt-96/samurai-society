import Homepage from "../pages/homepage/Homepage";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

export const mainRoutes = [
  {
    path: "/",
    module: <Homepage />,
  },
  {
    path: "*",
    module: <PageNotFound />,
  },
];
