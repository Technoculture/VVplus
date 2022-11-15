import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionLayout
        title="Balcony Railings"
        index={1}
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
        title="Main Gate"
        index={2}
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
        index={3}
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
