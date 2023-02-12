export function HomeSectionFirst({ items }: any) {
  const contents = items
    .filter((item: any, i: number) => i !== 0)
    .map((item: any, i: number) => {
      return (
        <div className="col-span-1" key={i}>
          <img
            className={`h-96 md:max-w-md max-w-xs sm:max-w-md rounded-xl ${
              i === 3 ? " w-full	" : ""
            }`}
            src={item.img}
            alt={item.title}
          />
        </div>
      );
    });

  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 grid-flow-row auto-rows-min auto-cols-min justify-center gap-4">
          <div className="row-span-2">
            <img
              className="h-full md:max-w-md max-w-xs sm:max-w-md rounded-xl"
              src="https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="image description"
            />
          </div>
          {contents}
        </div>
      </div>
    </>
  );
}
