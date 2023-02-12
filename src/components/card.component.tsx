import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

export function Card({ data }: any) {
  return (
    <div className="group cursor-pointer">
      <div className="transition ease-in-out delay-100 duration-150 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow group-hover:bg-gray-800 group-hover:border-gray-700">
        {data.icon === "icon1" ? (
          <img className="mx-auto rounded-lg" src={icon1} alt="" />
        ) : null}
        {data.icon === "icon2" ? (
          <img className="mx-auto rounded-lg" src={icon2} alt="" />
        ) : null}
        {data.icon === "icon3" ? (
          <img className="mx-auto rounded-lg w-16" src={icon3} alt="" />
        ) : null}
        <a href="#">
          <h5 className=" transition ease-in-out duration-0 delay-0 mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 group-hover:text-white">
            {data.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-center text-gray-500 group-hover:text-gray-400">
          {data.description}
        </p>
        <a
          href="#"
          className="block items-center text-center text-blue-600 hover:underline group-hover:text-gray-400"
        >
          {data.label} &gt;
        </a>
      </div>
    </div>
  );
}
