import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-[10px] h-fit">
      <div
        className={` select-none cursor-pointer rounded-[15px] 
      
      
      `}
      >
        <AccordionLayout
          title="Main Gate"
          glbTitle="plot-boundary"
          design="Minimal Floral"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={1000}
          a={-9.424777961}
          b={1.570796327}
          t={{ x: 220, y: 50, z: 0 }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
      <div className={`select-none  cursor-pointer  rounded-[15px]`}>
        <AccordionLayout
          title="Garden"
          glbTitle="plot-pool"
          design="All Steel"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={1000}
          a={0}
          b={0}
          t={{ x: 100, y: 100, z: 0 }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>

      <div
        className={`select-none cursor-pointerrounded-[15px]  
      
      `}
      >
        <AccordionLayout
          title="Balcony Railings"
          glbTitle="first-floor-railing_ff"
          design="All Steel"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={1000}
          a={-9.424777961}
          b={1.570796327}
          t={{ x: 100, y: 100, z: -50 }}
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
          glbTitle="plot-pool"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          r={1000}
          a={0}
          b={0}
          t={{ x: 100, y: 100, z: 0 }}
        >
          <SelectCarousel />
        </AccordionLayout>
      </div>
    </div>
  );
};

export default Accordion;

/*
<div classNameName='flex flex-col justify-center items-center'>
          <AccordionLayout title="Accordion 1">
            This is Accordion 1 Content    
          </AccordionLayout>

          <AccordionLayout title="Accordion 2">
            This is Accordion 2 Content    
          </AccordionLayout>
      </div>
 */
