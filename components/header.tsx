"use client";

import ProfilePicture from "./profile-picture";
import { motion } from "motion/react";
import HeaderDescription from "./header-description";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <div className="flex gap-4 items-center md:gap-6">
        <ProfilePicture />
        <HeaderDescription
          name="Henry James Ribano"
          address="Ajman, United Arab Emirates"
        />
      </div>
    </motion.section>
  );
}
