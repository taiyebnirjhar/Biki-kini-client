import React from "react";
import { Outlet } from "react-router-dom";
import AltNav from "../../components/Navbar/AltNav";

function DashrRoot() {
  return (
    <div>
      <AltNav />
      <Outlet />
    </div>
  );
}

export default DashrRoot;
