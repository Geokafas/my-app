import { useState } from "react";
import { StatItem } from "../utils/interfaces/data.interface";

export function Sliders({ items }: any) {
  const [sliders, setSliders] = useState(items.stats);
  function handleSlide(value: any, i: any) {
    const newState = sliders.map((obj: StatItem, key: number) => {
      if (key === i) {
        return { ...obj, amount: parseInt(value) };
      }
      return obj;
    });
    setSliders(newState);
  }
  const contents = sliders.map((item: StatItem, i: number) => {
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
          className="w-9/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        ></input>
        <span> {item.amount}</span>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-2xl pb-20 text-center">{items.graphText}</h1>
      {contents}
    </>
  );
}
