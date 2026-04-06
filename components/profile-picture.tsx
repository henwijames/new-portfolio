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
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Default Image */}
        <Image
          src={Me}
          alt="Profile Picture"
          className="object-cover w-full h-full"
          priority
        />

        {/* Hover Image */}
        <Image
          src={MeHover}
          alt="Profile Picture Hover"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
            isHovered ? "opacity-100 cursor-pointer" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
