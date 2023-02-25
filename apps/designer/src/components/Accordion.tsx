import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";
import { cameraAnglesObjects } from "../../public/cameraPropConstants.json";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-[10px] h-fit">
      {cameraAnglesObjects.map((floor, idx) => (
        <div className={`select-none cursor-pointer rounded-[15px]`}>
          <AccordionLayout
            title={floor.title}
            design={floor.design}
            index={idx}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            cameraPosition={floor.cameraPosition}
            cameraTarget={floor.cameraTarget}
          >
            <SelectCarousel />
          </AccordionLayout>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
