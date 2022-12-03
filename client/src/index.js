import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Web3Provider from "./contexts/Web3Provider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import RegisterSeller from "./pages/RegisterSeller";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import ActiveWarranty from "./pages/ActiveWarranty";
import CreateWarranty from "./pages/CreateWarranty";
import ExpiredWarranty from "./pages/ExpiredWarranty";
import PendingWarranty from "./pages/PendingWarranty";
import Resell from "./pages/Resell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "register/:add",
    element: <RegisterSeller />,
  },
  {
    path: "buyer/:add",
    element: <BuyerDashboard />,
  },
  {
    path: "seller/:add",
    element: <SellerDashboard />,
  },
  {
    path: "warranty/:id",
    element: <ActiveWarranty />,
  },
  {
    path: "createwarranty/:add",
    element: <CreateWarranty />,
  },
  {
    path: "expired/:id",
    element: <ExpiredWarranty />,
  },
  {
    path: "pending/:add",
    element: <PendingWarranty />,
  },
  {
    path: "resell/:id",
    element: <Resell />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3Provider>
      <Navbar />
      <RouterProvider router={router} />
    </Web3Provider>
  </React.StrictMode>
);
