import Me from "@/public/assets/images/me.png";
import MeHover from "@/public/assets/images/me2.jpeg";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePicture() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-40 h-40 md:w-40 md:h-40 mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? MeHover : Me}
        alt="Profile Picture"
        className={`rounded-lg w-full h-full  object-cover ${
          isHovered ? "cursor-pointer" : ""
        }`}
        priority
      />
    </div>
  );
}
