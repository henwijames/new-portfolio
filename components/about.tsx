import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
          <CardContent>
            <CardHeader>
              <CardTitle className="text-lg font-bold">About</CardTitle>
            </CardHeader>
            <p className="text-sm text-foreground/70 leading-relaxed">
              I am a Full Stack Developer and IT Support Professional
              specializing in the T3 Stack (Next.js, TypeScript, Prisma, and
              Tailwind CSS). I build high-performance web applications and
              custom POS systems that help businesses streamline their
              operations and manage their digital infrastructure more
              effectively.
              <br />
              <br />I have extensive experience bridging the gap between robust
              software development and IT infrastructure management. From
              architecting complex database schemas with Prisma to maintaining
              critical hardware and networks, I focus on delivering end-to-end
              technical solutions that are both scalable and reliable.
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </>
  );
}
