import { useState } from "react";

export function Tabs({ tabs }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onSelectedIndex = (index: number) => {
    setActiveIndex(index);
  };
  const titles = tabs.map((tab: any, i: number) => {
    return (
      <li
        className={`
        inline-block p-4 mr-0 text-center
         font-medium text-gray-700 rounded-lg
         hover:bg-gray-200 focus:outline-none 
         focus:bg-gray-200 transition ease-in-out 
         duration-150 cursor-pointer
        ${
          i === activeIndex
            ? " active border-2 bg-gray-200 border-b-teal-500 "
            : ""
        }`}
        key={i}
        onClick={() => onSelectedIndex(i)}
      >
        <span>{tab.title}</span>
      </li>
    );
  });
  const contents = tabs
    .filter((tab: any, i: number) => i === activeIndex)
    .map((tab: any, i: number) => {
      return (
        <div className="py-10" key={i}>
          {tab.content}
        </div>
      );
    });
  return (
    <div className="text-center">
      <div className="md:m-auto rounded-lg">
        <div className="container mx-auto">
          <ul className="p-4 bg-gradient-to-r from-gray-50 to-gray-200 text-end">
            {titles}
          </ul>
        </div>
        <div className="inline">{contents}</div>
      </div>
    </div>
  );
}
