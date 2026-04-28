"use client";

import Me from "@/public/assets/images/me.png";
import MeHover from "@/public/assets/images/me2.jpeg";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePicture() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-28 w-28 shrink-0 sm:h-32 sm:w-32 md:h-36 md:w-36"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm">
        <Image
          src={Me}
          alt="Profile Picture"
          className="h-full w-full object-cover"
          priority
        />

        <Image
          src={MeHover}
          alt="Profile Picture Hover"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100 cursor-pointer" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
