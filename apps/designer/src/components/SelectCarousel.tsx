import { useState } from "react";
// import data from "../../public/railings_sf.json";
import data from "../../public/house.json";
import { selector } from "./elements/selector";

const SelectCarousel = () => {
  const root_url = data.baseUrl;
  const [active, setActive] = useState(0);
  function changeDesign(id: number, category: string) {
    setActive(id);
    selector(active, category);
  }
  return (
    <>
      <div className="box-border relative flex  gap-[5px] max-h-[200px] scrollbar-hide rounded-[10px] h-[150px] overflow-x-hidden overflow-x-scroll overflow-y-hidden font-sans h-fit snap-mandatory scroll-smooth snap-x whitespace-nowrap w-fit">
        {data.choosableOptions[0].map((e) => (
          <>
            <img
              key={e.id}
              src={root_url + e.thumbnail_url}
              alt="..."
              height=""
              width="155px"
              className="rounded-[10px] h-[110px]"
              onClick={() => {
                changeDesign(e.id, e.category);
              }}
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
