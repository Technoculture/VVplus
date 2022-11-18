// import { useState } from "react";
import data from "../../public/railings_sf.json";

const SelectCarousel = () => {
  const root_url = data.root_url;
  // const [active, setActive] = useState(false);
  return (
    <div className="h-32">
      <div className="box-border flex h-40 gap-2 overflow-x-hidden overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x whitespace-nowrap w-80">
        {data.options.map((e) => (
          <img
            key={e.id}
            src={root_url + e.thumbnail_url}
            alt="..."
            height="1000px"
            width="200px"
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCarousel;

// TODO:
// Use decisive rendering to turn off components when we click - button
// When open the accordion for balcony, take camera angle to balcony, when minimize bring the camera back to home view.
// Click image -> change 3D component
// remove buttons to rooftop and etc from navbar
