"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Link2 } from "lucide-react";
import PosImage from "@/public/assets/images/pos.png";
import PosAdminImage from "@/public/assets/images/posadmin.png";
import DriversImage from "@/public/assets/images/drivers.png";
import AssetMngImage from "@/public/assets/images/assetmng.png";

type ProjectsProps = {
  className?: string;
};

const projects = [
  {
    name: "Salon POS",
    type: "Job Project",
    stack: ["Next.js", "shadcn/ui", "Express", "MySQL"],
    summary:
      "A salon POS tailored around the business's day-to-day requirements, including booking, billing, vouchers, customers, staff workflows, and sales operations.",
    image: PosImage,
    githubUrl: "https://github.com/henwijames/salon-pos",
    projectUrl: "https://example.com/salon-pos",
  },
  {
    name: "Salon POS Admin",
    type: "Job Project",
    stack: ["Next.js", "shadcn/ui", "Express", "MySQL"],
    summary:
      "The admin side of the salon POS, built for branch-level oversight with business overview metrics, revenue trends, service stats, and staff activity monitoring.",
    image: PosAdminImage,
    githubUrl: "https://github.com/henwijames/salon-pos-admin",
    projectUrl: "https://example.com/salon-pos-admin",
  },
  {
    name: "Driver Scheduling System",
    type: "Job Project",
    stack: ["React.js", "Inertia.js", "shadcn/ui", "Laravel"],
    summary:
      "An internal driver's scheduling system with route visibility through Leaflet maps, installable PWA support, and push notifications for operational updates.",
    image: DriversImage,
    githubUrl: "https://github.com/henwijames/driver-scheduling-system",
    projectUrl: "https://example.com/driver-scheduling-system",
  },
  {
    name: "Asset Management System",
    type: "Job Project",
    stack: ["Laravel", "DaisyUI"],
    summary:
      "An internal asset management system for tracking company assets, borrowing activity, returns, and department-level usage in one place.",
    image: AssetMngImage,
    githubUrl: "https://github.com/henwijames/asset-management-system",
    projectUrl: "https://example.com/asset-management-system",
  },
];

export default function Projects({ className }: ProjectsProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  const activeProject = projects[current] ?? projects[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
      className={className}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Projects</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-5 p-0 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
          <div className="space-y-3">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.name}>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-foreground/[0.03] p-3 md:p-4">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px)] bg-[size:18px_18px]" />
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="relative h-[260px] w-full rounded-xl object-contain object-center  md:h-[340px] xl:h-[420px]"
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-border/70 bg-background/85 backdrop-blur-sm" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-border/70 bg-background/85 backdrop-blur-sm" />
            </Carousel>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`group overflow-hidden rounded-xl border text-left transition-all ${
                    current === index
                      ? "border-foreground/30 bg-foreground/[0.05]"
                      : "border-border/70 bg-background hover:border-foreground/20"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="h-20 w-full object-contain object-center  transition duration-500 ease-out "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-80" />
                  </div>
                  <div className="p-3">
                    <p className="truncate text-xs font-medium">
                      {project.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-foreground/[0.02] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                  Featured Project
                </p>
                <div className="mt-2">
                  <Badge variant="outline">{activeProject.type}</Badge>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight">
                  {activeProject.name}
                </h3>
              </div>
              <span className="rounded-full border border-border/70 px-3 py-1 text-xs text-foreground/55">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {activeProject.summary}
            </p>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="rounded-lg"
                >
                  <Link
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github />
                    GitHub
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-lg">
                  <Link
                    href={activeProject.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link2 />
                    Visit Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
