"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type TechStackProps = {
  className?: string;
};

export const techStack = {
  frontend: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "Next.js",
    "Shadcn UI",
    "Inertia.js",
    "Bootstrap",
  ],
  backend: ["Laravel", "Node.js", "Express", "MySQL"],
  tools: ["Postman", "Codex", "Antigravity", "Figma"],
};

export default function TechStack({ className }: TechStackProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
      className={className}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Tech Stack</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-3 p-0 md:grid-cols-2">
          {Object.entries(techStack).map(([category, items]) => (
            <div
              key={category}
              className={`p-4 ${
                category === "frontend" ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="mb-3 text-sm font-semibold capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <Badge className="text-xs" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  );
}
