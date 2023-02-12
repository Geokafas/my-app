import { Tabs } from "../../components/tabs.component";
import useApiHook from "../../utils/hooks/useApi";
import { HomeSectionFirst } from "./home-section1.page";
import { HomeSectionSecond } from "./home-section2.page";

export function Home() {
  const { data, loading, error } = useApiHook({
    url: "/7h9Hfb5ycGhgtRhEADZKqb/22238752942f2bf6eae6b1d4b6d209d7/home.json",
  });
  console.log(data);
  const tabsData = [
    {
      title: "section 1",
      active: true,
      content: !loading ? (
        <HomeSectionFirst items={data.data.sections[0].images} />
      ) : null,
    },
    {
      title: "section 2",
      active: false,
      content: !loading ? (
        <HomeSectionSecond items={data.data.sections[1]} />
      ) : null,
    },
  ];
  return (
    <>
      {!loading ? (
        <h1 className="text-3xl font-bold pb-5 text-center">
          {data.data.description}
        </h1>
      ) : null}
      <Tabs tabs={tabsData} />
    </>
  );
}
