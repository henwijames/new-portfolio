import { motion } from "motion/react";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TechStackProps = {
  className?: string;
};

export default function TechStack({ className }: TechStackProps) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        className={className}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Tech Stack</CardTitle>
          </CardHeader>
        </Card>
      </motion.section>
    </>
  );
}
