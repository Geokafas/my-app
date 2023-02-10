import { title } from "process";
import { useState } from "react";

export function Sliders({ items }: any) {
  const [sliders, setSliders] = useState([0, 0, 0, 0]);
  // {
  //     "id": 2,
  //     "title": "Our Services",
  //     "graphText": "We create websites and campaigns that expose new opportunities",
  //     "stats": [
  //       { "title": "Percentage 1", "amount": 600 },
  //       { "title": "Percentage 2", "amount": 300 },
  //       { "title": "Percentage 3", "amount": 300 },
  //       { "title": "Percentage 4", "amount": 800 }
  //     ],
  //     "formText": "Validate your info",
  //     "formLabels": ["Your phone", "Your Email", "Your password"],
  //     "buttonText": "Submit"
  //   }
  function handleSlide(e: any, i: any) {
    //setSliders();
  }
  const contents = items.stats.map((item: any, i: number) => {
    return (
      <div className="" key={i}>
        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {item.title}
        </label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1000"
          value={item.amount}
          onChange={(e) => handleSlide(e.target.value, i)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        ></input>
      </div>
    );
  });
  return <>{contents}</>;
}
