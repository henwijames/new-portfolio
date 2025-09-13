import { motion } from "motion/react";
import { Card, CardHeader, CardTitle } from "./ui/card";

type AboutProps = {
  className?: string;
};

export default function About({ className }: AboutProps) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className={className}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">About</CardTitle>
          </CardHeader>
        </Card>
      </motion.section>
    </>
  );
}
