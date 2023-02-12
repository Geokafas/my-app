export function HomeSectionFirst({ items }: any) {
  const contents = items
    .filter((item: any, i: number) => i !== 0)
    .map((item: any, i: number) => {
      return (
        <div className="col-span-1" key={i}>
          <img
            className={`h-96 max-w-lg rounded-xl	 ${i === 3 ? " w-full	" : ""}`}
            src={item.img}
            alt={item.title}
          />
        </div>
      );
    });

  return (
    <>
      <div className="md:container md:mx-auto">
        <div className="grid md:grid-rows-2 md:grid-flow-col md:gap-4 grid-flow-row auto-rows-min auto-cols-min justify-center gap-4">
          <div className="row-span-2">
            <img
              className="h-full max-w-lg rounded-xl"
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
