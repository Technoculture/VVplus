// import { useState } from "react";
import data from "../../public/railings_sf.json";

const SelectCarousel = () => {
  const root_url = data.root_url;
  // const [active, setActive] = useState(false);
  return (
    <>
      <div className="box-border relative flex  gap-[5px] scrollbar-hide rounded-2xl h-[150px]  overflow-x-hidden overflow-x-scroll overflow-y-hidden font-sans h-fit snap-mandatory scroll-smooth snap-x whitespace-nowrap w-fit">
        {data.options.map((e) => (
          <>
            <img
              key={e.id}
              src={root_url + e.thumbnail_url}
              alt="..."
              height=""
              width="155px"
              className="rounded-[10px] h-[110px]  "
            />
            <div>
              <p
                key={e.id}
                className="absolute font-[RobotMono] lg:text-sm md:text-xs text-neutral-600  ml-[-46%] top-[85%] top-[85%]"
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
