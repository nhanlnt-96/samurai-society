import Homepage from "../pages/homepage/Homepage";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

export const mainRoutes = [
  {
    path: "/",
    module: <Homepage />,
  },
  {
    path: "/home",
    module: <Homepage />,
  },
  {
    path: "/welcome",
    module: <Homepage />,
  },
  {
    path: "/introducing",
    module: <Homepage />,
  },
  {
    path: "/members",
    module: <Homepage />,
  },
  {
    path: "/benefit",
    module: <Homepage />,
  },
  {
    path: "/roadmap",
    module: <Homepage />,
  },
  {
    path: "/team",
    module: <Homepage />,
  },
  {
    path: "/faq",
    module: <Homepage />,
  },
  {
    path: "*",
    module: <PageNotFound />,
  },
];
