import { ReactNode } from "react";
import Carousel from "../components/carousel.component";
import { Header } from "../components/header.component";
import ErrorBoundary from "../pages/error-boundary/error-boundary.page";
import useApiHook from "./hooks/useApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Layout({ children }: { children: ReactNode }) {
  const { data, loading, error } = useApiHook({
    url: "/4ttnLOl9hmapSJsjn8042Y/bb512c0f948393dfa7d1e0630effd9e8/menu.json",
  });
  const {
    data: carouselData,
    loading: carouselLoading,
    carouselError,
  } = useApiHook({
    url: "/6wBTvMDaIvniHwmi48TUqB/64522293e6de384179658bd140ded000/slider.json",
  });
  return (
    <>
      <section className="bg-gradient-to-b from-white-500 to-blue-500">
        <ErrorBoundary>
          {!loading ? <Header items={data} /> : null}
          {!carouselLoading ? <Carousel items={carouselData} /> : null}
          {children}
        </ErrorBoundary>
      </section>
    </>
  );
}
