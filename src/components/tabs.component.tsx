import { useState } from "react";

export function Tabs({ tabs }:any) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onSelectedIndex = (index:number) => {
        setActiveIndex(index);
      };
    const titles = tabs.map((tab:any, i:number) => {
    return (
        <li
        className={`"mr-2" tab${i === activeIndex ? " active" : ""}`}
        key={i}
        onClick={() => onSelectedIndex(i)}
        >
        {tab.title}
        </li>
        );
    });
    const contents = tabs
    .filter((tab:any, i:number) => i === activeIndex)
    .map((tab:any, i:number) => {
      return (
        <div className="tab-content" key={i}>
          {tab.content}
        </div>
      );
    });
    return (
        <>
            <div className="tabs border-b border-gray-200 dark:border-gray-700">
                <ul className="tab-group flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {titles}
                    <div className="tab-content-group">{contents}</div>
                </ul>
            </div>
        </>
    );
}