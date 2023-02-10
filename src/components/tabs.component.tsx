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
        ${i === activeIndex ? " active" : ""}`}
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
        <div className="p-20 px-10 leading-tight" key={i}>
          {tab.content}
        </div>
      );
    });
  return (
    <div className="text-center">
      <div className="m-auto rounded-lg">
        <ul className="p-4 bg-white border border-gray-200 rounded-lg text-center">{titles}</ul>
        <div className="inline-block">{contents}</div>
      </div>
    </div>
  );
}
