import React from "react";
import { Outlet } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const ParticlesLayout = () => {
  return (
    <div className="particles-layout">
      <ParticlesBackground />
      <Outlet />
    </div>
  );
};

export default ParticlesLayout;
