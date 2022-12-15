import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";

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
          r={1000}
          a={-9.424777961}
          b={1.570796327}
          t={{ x: 250, y: 70, z: 30 }}
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
          r={1000}
          a={0}
          b={0}
          t={{ x: -300, y: -400, z: 400 }}
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
          r={1000}
          a={-9.424777961}
          b={1.570796327}
          t={{ x: 500, y: 350, z: 280 }}
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
          r={1000}
          a={0}
          b={0}
          t={{ x: -300, y: -400, z: 400 }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
    </div>
  );
};

export default Accordion;
