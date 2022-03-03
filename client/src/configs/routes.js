import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/login/LoginPage";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import AdminPage from "../pages/admin/AdminPage";
import AdminHomepage from "../pages/adminHomepage/AdminHomepage";


export const mainRoutes = [
  {
    path: "/",
    module: <Homepage/>,
  },
  {
    path: "/login",
    module: <LoginPage/>,
  },
  {
    path: "*",
    module: <PageNotFound/>,
  },
];

export const adminRoutes = {
  path: "/admin",
  module: <AdminPage/>,
  isPrivate: true,
  children: [
    {
      module: <AdminHomepage/>,
    },
    // {
    //   path: "banner",
    //   module: <BannerEditor/>,
    // },
    // {
    //   path: "about",
    //   module: <AboutEditor/>,
    // },
    // {
    //   path: "roadmap",
    //   module: <RoadmapEditor/>
    // },
    // {
    //   path: "spot",
    //   module: <SpotEditor/>
    // },
    // {
    //   path: "collections",
    //   module: <CollectionsEditor/>
    // },
    // {
    //   path: "the-specs",
    //   module: <SpecsEditor/>
    // },
    // {
    //   path: "drops",
    //   module: <DropsEditor/>
    // },
    // {
    //   path: "team",
    //   module: <TeamEditor/>
    // },
    // {
    //   path: "faq",
    //   module: <FaqEditor/>
    // },
  ]
};