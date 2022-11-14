import { Carousel } from "flowbite-react";
import { useState } from "react";
import data from "../../public/railings_sf.json";

const SelectCarousel = () => {
  const root_url = data.root_url;
  const [active, setActive] = useState(false);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div className="flex gap-2 box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x whitespace-nowrap h-40 w-80">
        {data.options.map((e) => (
            <img
              key={e.id}
              src={root_url + e.thumbnail_url}
              alt="..."
              height="100px"
              width="200px"
              className="rounded-xl"
            />
        ))}
      </div>
    </div>
  );
};

export default SelectCarousel;
