import React from "react";
import { Range } from "react-range";
import data from "../../public/data.json";

export default function Slider() {
  const [values, setValues] = React.useState([0]);
  return (
    <div className="w-full flex justify-center">
      <div className="w-80 p-10 border-4 border-red-300">
        <h1 className="text-4xl">Range</h1>
        <Range
          step={1}
          min={0}
          max={data[0].floors.length-1}
          values={values}
          onChange={(values) => {
            setValues(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          )}
        />
        <span>Floor: {values[0]}</span>
        <br/>
        <span>Set on 0 for plot and {data[0].floors.length-1} for roof</span>
      </div>
    </div>
  );
}