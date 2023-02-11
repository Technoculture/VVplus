import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import SelectCarousel from "./SelectCarousel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const floorProps = [
    {
      title: "Main Gate",
      design: "Minimal Floral",
      p: [220, 0, 50],
      t: [10, 10, 50],
    },
    {
      title: "Garden",
      design: "All Steel",
      p: [101, 50, -3],
      t: [100, 0, -3],
    },
    {
      title: "Balcony Railings",
      design: "All Steel",
      p: [50, 75, 0],
      t: [0, 75, 0],
    },
    {
      title: "Garden",
      design: "All Steel",
      p: [101, 50, -3],
      t: [100, 0, -3],
    },
  ];
  return (
    <div className="flex flex-col gap-[10px] h-fit">
      {floorProps.map((floor, idx) => (
        <div className={` select-none cursor-pointer rounded-[15px]`}>
          <AccordionLayout
            title={floor.title}
            design={floor.design}
            index={idx}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            p={floor.p}
            t={floor.t}
          >
            <SelectCarousel />
          </AccordionLayout>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
