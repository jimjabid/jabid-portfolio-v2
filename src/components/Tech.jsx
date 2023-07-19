import React from "react";
import { BallCanvas } from "./canvas";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className = {"sm:px-20  sm:py-16  xs:py-[40px] py-16"}>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </section>
  );
};

export default Tech