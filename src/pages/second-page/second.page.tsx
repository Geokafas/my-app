import { Card } from "../../components/card.component";
import useApiHook from "../../utils/hooks/useApi";
import { Tile } from "../../utils/interfaces/data.interface";

export function PageSecond() {
  const { data, loading, error } = useApiHook({
    url: "/1SRT2QfaAMBO95zDbpKNtZ/f87309fa1850677c39a1dee375b75fb7/page.json",
  });
  const cards = data?.data?.tiles.map((item: Tile, key: number) => {
    return <Card data={item} key={key} />;
  });
  return (
    <>
      <div className="text-center">
        <div className="m-auto rounded-lg">
          {!loading ? (
            <h1 className="text-3xl font-bold pb-24">
              {data.data.description}
            </h1>
          ) : null}
          <div className="grid grid-cols-3 gap-4 justify-items-center ">
            {cards}
          </div>
        </div>
      </div>
    </>
  );
}
