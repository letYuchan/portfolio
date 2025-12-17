import Home from "@/pages/home/Home";
import Landing from "@/pages/landing/Landing";
import Layout from "@/shared/components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Landing /> },
          { path: "home", element: <Home /> },
        ],
      },
    ],
    {
      basename: "/portfolio",
    }
  );
  return <RouterProvider router={router} />;
};
export default App;
