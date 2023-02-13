import { useSelector } from "react-redux";
import { Card } from "../../components/card.component";
import { Tile } from "../../utils/interfaces/data.interface";

export function PageSecond() {
  const { pageData, pageDataLoadingStatus } = useSelector(
    (state: any) => state.appData
  );
  const cards = pageData?.tiles.map((item: Tile, key: number) => {
    return <Card data={item} key={key} />;
  });
  return (
    <>
      <div className="text-center">
        <div className="m-auto rounded-lg">
          {pageDataLoadingStatus === "succeeded" ? (
            <h1 className="text-3xl font-bold pb-24 py-10">
              {pageData.description}
            </h1>
          ) : null}
          <div className="grid md:grid-cols-3 gap-4 justify-items-center grid-flow-row auto-rows-min auto-cols-max justify-center py-10">
            {cards}
          </div>
        </div>
      </div>
    </>
  );
}
