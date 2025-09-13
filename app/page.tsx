"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid w-full grid-cols-1 md:grid-cols-6 gap-2">
        <About className="col-span-1 md:col-span-6 space-y-2" />
        <Experience className="col-span-1 md:col-span-2" />
        <TechStack className="col-span-1 md:col-span-4" />
      </div>
    </>
  );
}
