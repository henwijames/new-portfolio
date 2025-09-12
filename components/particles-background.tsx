"use client";

import { useTheme } from "next-themes";
import Particles from "./particles";

export default function ParticlesBackground() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Particles
        particleColors={
          theme === "dark" ? ["#ffffff", "#aaaaaa"] : ["#000000", "#555555"]
        }
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
