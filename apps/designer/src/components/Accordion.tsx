import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
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
      <AccordionLayout
        title="Balcony Railings"
        design="All Steel"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        r={1000}
        a={-9.424777961}
        b={1.570796327}
        t={{ x: 500, y: 350, z: 280 }}
      >
        <SelectCarousel />
      </AccordionLayout>

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