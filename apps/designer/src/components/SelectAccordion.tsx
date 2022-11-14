import { Accordion } from "flowbite-react";
import SelectCarousel from "./SelectCarousel";

const SelectAccordion = () => {
  // const dataString = JSON.stringify(data)
  // console.log(data);
  
  return (
    <Accordion alwaysOpen={true} className="w-96">
      <Accordion.Panel>
        <Accordion.Title className="bg-white">Balcony Railings</Accordion.Title>
        <Accordion.Content className="bg-white h-56 flex justify-center p-0">
          <SelectCarousel/>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default SelectAccordion;
