import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home-page/home.page";
import { Layout } from "./utils/layout.page";
import { PageSecond } from "./pages/second-page/second.page";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchcarousel,
  fetchPage,
  fetchSections,
} from "./redux/reducer-slices/storeData";
import NotFound from "./pages/not-found-page/not-found.page";

//define the structure and content
function App() {
  const { sectionsLoadingStatus, carouselLoadingStatus, pageLoadingStatus } =
    useSelector((state: any) => state.appData);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (carouselLoadingStatus === "idle") {
      dispatch(
        fetchcarousel(
          "/6wBTvMDaIvniHwmi48TUqB/64522293e6de384179658bd140ded000/slider.json"
        )
      );
    }
  }, []);

  useEffect(() => {
    if (sectionsLoadingStatus === "idle") {
      dispatch(
        fetchSections(
          "/7h9Hfb5ycGhgtRhEADZKqb/22238752942f2bf6eae6b1d4b6d209d7/home.json"
        )
      );
    }
  }, []);

  useEffect(() => {
    if (pageLoadingStatus === "idle") {
      dispatch(
        fetchPage(
          "/1SRT2QfaAMBO95zDbpKNtZ/f87309fa1850677c39a1dee375b75fb7/page.json"
        )
      );
    }
  }, []);

  if (
    sectionsLoadingStatus === "idle" &&
    carouselLoadingStatus === "idle" &&
    pageLoadingStatus === "idle"
  ) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout children={<Outlet />} />}>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<PageSecond />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

//memo: skip rendering the component if its props have not changed
export default memo(App);
