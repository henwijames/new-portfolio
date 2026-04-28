"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const TIMELINE_DATA = [
  {
    title: "IT Support / Full Stack Developer",
    company: "Erick Trading Co.",
    year: "2025 - Present",
    isLatest: true,
  },
  {
    title: "Web Developer",
    company: "Virtual Bears",
    year: "2025",
  },
  {
    title: "BS Information Technology",
    company: "Lemery Colleges",
    year: "2025",
  },
];

export default function Experience({ className }: { className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
      className={className}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Experience</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative space-y-5">
            <div className="absolute bottom-2 left-1.5 top-1.5 w-px bg-border"></div>

            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative pl-6 group/role">
                <div
                  className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                    item.isLatest
                      ? "border-accent dark:bg-white bg-black"
                      : "border-border bg-background group-hover/role:bg-accent"
                  }`}
                ></div>

                <div className="space-y-1.5 rounded-xl border border-transparent p-3 transition-colors group-hover/role:border-border/70 group-hover/role:bg-foreground/[0.02]">
                  <h3 className="text-sm font-semibold transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs text-foreground/70 ${
                        item.isLatest ? "text-accent/70" : ""
                      }`}
                    >
                      {item.company}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)] ${
                        item.isLatest ? "bg-accent/10" : ""
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
