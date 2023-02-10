export function HomeSectionFirst({ items }: any) {
  const contents = items
    .filter((item: any, i: number) => i !== 0)
    .map((item: any, i: number) => {
      return (
        <div className="col-span-1" key={i}>
          <img
            className="h-96 max-w-lg rounded-lg"
            src={item.img}
            alt={item.title}
          />
        </div>
      );
    });

  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-2">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="image description"
          />
        </div>
        {contents}
      </div>
    </>
  );
}
