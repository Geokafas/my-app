export function HomeSectionFirst({ items }:any) {
    const contents = items
    .filter((item: any, i: number) => i !== 0)
    .map((item: any, i: number) => {
      return (
        <div className="" key={i}>
          <img className="h-auto max-w-lg rounded-lg" 
          src={item.img} 
          alt={item.title}/>
        </div>
      );
    });

    return (
        <>
        
        <div className="grid grid-cols-3 gap-4">
            <div className="">
                <img className="h-auto max-w-lg rounded-lg" src="https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image description"/>
            </div>
            {contents}
        </div>
        </>
    );
}
