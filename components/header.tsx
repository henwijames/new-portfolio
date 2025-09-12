import ProfilePicture from "./profile-picture";
import { motion } from "motion/react";
import HeaderDescription from "./header-description";

export default function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4 md:gap-6"
    >
      <HeaderDescription
        name="Henry"
        description="A passionate web developer crafting beautiful and functional digital experiences."
      />
      <ProfilePicture />
    </motion.section>
  );
}
