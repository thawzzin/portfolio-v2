import Image from "next/image";
import React from "react";

const FloatingSkills = () => {
  return (
    <ul className="background">
      <li>
        <Image src={"/icons/nextjs.svg"} alt="skill" width={44} height={44} />
      </li>
      <li>
        <Image src={"/icons/reactjs.svg"} alt="skill" width={44} height={44} />
      </li>
      <li>
        <Image src={"/icons/nodejs.svg"} alt="skill" width={44} height={44} />
      </li>
    </ul>
  );
};

export default FloatingSkills;
