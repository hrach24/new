import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "@/components/pages/home/Home.jsx";
import About from "@/components/pages/about/About.jsx";
import Layout from "@/components/layout/Layout.jsx";
import News from "@/components/pages/news/News.jsx";
import ContactUs from "@/components/pages/contactUs/ContactUs.jsx";
import Products from "@/components/pages/products/Products.jsx";

// Scroll to top component
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/news", element: <News /> },
      { path: "/products", element: <Products /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
