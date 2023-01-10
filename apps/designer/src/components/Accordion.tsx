import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";
import data from "../../public/cameraAngles.json";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-[10px] h-fit">
      <div className={` select-none cursor-pointer rounded-[15px]`}>
        <AccordionLayout
          title="Main Gate"
          design="Minimal Floral"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={data[0].front.target_value.radius}
          a={data[0].front.target_value.alpha}
          b={data[0].front.target_value.beta}
          t={{
            x: data[0].front.target_value.target.x,
            y: data[0].front.target_value.target.y,
            z: data[0].front.target_value.target.z,
          }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
      <div className={`select-none  cursor-pointer  rounded-[15px]`}>
        <AccordionLayout
          title="Garden"
          design="All Steel"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={data[2].top.target_value.radius}
          a={data[2].top.target_value.alpha}
          b={data[2].top.target_value.beta}
          t={{
            x: data[2].top.target_value.target.x,
            y: data[2].top.target_value.target.y,
            z: data[2].top.target_value.target.z,
          }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
      <div className={`select-none cursor-pointerrounded-[15px]`}>
        <AccordionLayout
          title="Balcony Railings"
          design="All Steel"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={data[3].front.target_value.radius}
          a={data[3].front.target_value.alpha}
          b={data[3].front.target_value.beta}
          t={{
            x: data[3].front.target_value.target.x,
            y: data[3].front.target_value.target.y,
            z: data[3].front.target_value.target.z,
          }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
      <div
        className={` cursor-pointer select-none   rounded-[15px]
      
      `}
      >
        <AccordionLayout
          title="Garden"
          design="All Steel"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={data[2].top.target_value.radius}
          a={data[2].top.target_value.alpha}
          b={data[2].top.target_value.beta}
          t={{
            x: data[2].top.target_value.target.x,
            y: data[2].top.target_value.target.y,
            z: data[2].top.target_value.target.z,
          }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
    </div>
  );
};

export default Accordion;
