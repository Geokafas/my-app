import { Carousel } from "react-responsive-carousel";

export default ({ items }: any) => {
  console.log(items);
  const slides = items.data.map((slide: any, i: number) => {
    return (
      <div key={i} className="h-96">
        <img src={slide.image} className="object-cover h-96" />
        <p className="legend">{slide.subtitle ?? slide.title}</p>
      </div>
    );
  });
  return (
    <div className="container mx-auto rounded-lg ">
      <Carousel autoPlay showThumbs={false} infiniteLoop interval={8000}>
        {slides}
      </Carousel>
    </div>
  );
};
