import React from "react";
import Navbar from "../components/Navbar";

export default function Dashbordlayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
