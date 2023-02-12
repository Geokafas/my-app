import { Form } from "../../components/form.component";
import { Sliders } from "../../components/sliders.component";

export function HomeSectionSecond({ items }: any) {
  return (
    <>
      <div className="grid md:grid-rows-1 md:grid-flow-col md:gap-8 grid-flow-row auto-rows-max">
        <section className="sliders col-span-1 w-11/12  md:justify-self-end justify-self-center pt-24">
          <h1 className="text-sky-400 pb-4 text-center">{items.title}</h1>
          <Sliders items={items} />
        </section>
        <section className="col-span-1 w-9/12 md:justify-self-start justify-self-center pt-24">
          <Form items={items} />
        </section>
      </div>
    </>
  );
}
