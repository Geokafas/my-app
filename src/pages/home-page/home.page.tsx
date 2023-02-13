import { useSelector } from "react-redux";
import { Tabs } from "../../components/tabs.component";
import { HomeSectionFirst } from "./home-section1.page";
import { HomeSectionSecond } from "./home-section2.page";
export function Home() {
  const { sectionsData, sectionsLoadingStatus } = useSelector(
    (state: any) => state.appData
  );
  const tabsData = [
    {
      title: "section 1",
      active: true,
      content:
        sectionsLoadingStatus === "succeeded" ? (
          <HomeSectionFirst items={sectionsData.sections[0].images} />
        ) : null,
    },
    {
      title: "section 2",
      active: false,
      content:
        sectionsLoadingStatus === "succeeded" ? (
          <HomeSectionSecond items={sectionsData.sections[1]} />
        ) : null,
    },
  ];
  return (
    <>
      {sectionsLoadingStatus === "succeeded" ? (
        <h1 className="text-3xl font-bold pb-5 text-center py-10">
          {sectionsData.description}
        </h1>
      ) : null}
      <Tabs tabs={tabsData} />
    </>
  );
}
