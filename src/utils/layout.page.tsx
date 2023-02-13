import { ReactNode, useEffect } from "react";
import Carousel from "../components/carousel.component";
import { Header } from "../components/header.component";
import ErrorBoundary from "../pages/error-boundary/error-boundary.page";
import useApiHook from "./hooks/useApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";

export function Layout({ children }: { children: ReactNode }) {
  const { carouselData } = useSelector((state: any) => state.appData);
  const { data, loading, error } = useApiHook({
    url: "/4ttnLOl9hmapSJsjn8042Y/bb512c0f948393dfa7d1e0630effd9e8/menu.json",
  });

  return (
    <>
      <section className="bg-gradient-to-b from-white-500 to-blue-500">
        <ErrorBoundary>
          {!loading ? <Header items={data} /> : null}
          {carouselData?.length > 0 ? <Carousel items={carouselData} /> : null}
          {children}
        </ErrorBoundary>
      </section>
    </>
  );
}
