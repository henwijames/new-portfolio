import ProfilePicture from "./profile-picture";
import { motion } from "motion/react";
import HeaderDescription from "./header-description";

export default function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4 md:gap-6 mb-4"
    >
      <ProfilePicture />
      <HeaderDescription
        name="Henry James Ribano"
        address="Ajman, United Arab Emirates"
      />
    </motion.section>
  );
}
