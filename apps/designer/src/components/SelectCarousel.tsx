// import { useState } from "react";
import data from "../../public/railings_sf.json";

const SelectCarousel = () => {
  const root_url = data.root_url;
  // const [active, setActive] = useState(false);
  return (
    <>
      <div className="box-border relative flex  gap-[5px] scrollbar-hide rounded-2xl lg:h-[20vh] md:h-[16vh]  overflow-x-hidden overflow-x-scroll overflow-y-hidden font-sans h-fit snap-mandatory scroll-smooth snap-x whitespace-nowrap w-fit">
        {data.options.map((e) => (
          <>
            <img
              key={e.id}
              src={root_url + e.thumbnail_url}
              alt="..."
              height=""
              width="45%"
              className="rounded-[10px] lg:h-[15vh] h-[12vh]"
            />
            <div>
              <p
                key={e.id}
                className="absolute font-[RobotMono] lg:text-sm md:text-xs text-neutral-600  ml-[-44%] lg:top-[85%] md:top-[80%]"
              >
                INR {e.price}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SelectCarousel;

// TODO:
// Use decisive rendering to turn off components when we click - button
// When open the accordion for balcony, take camera angle to balcony, when minimize bring the camera back to home view.
// Click image -> change 3D component
// remove buttons to rooftop and etc from navbar
