import { Form } from "../../components/form.component";
import { Sliders } from "../../components/sliders.component";

export function HomeSectionSecond({ items }: any) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{items.title}</h1>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <section className="sliders col-span-1">
          <Sliders items={items} />
        </section>
        <section className="form col-span-1">
          <Form />
        </section>
      </div>
    </>
  );
}
