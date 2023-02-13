import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home-page/home.page";
import { Layout } from "./utils/layout.page";
import { PageSecond } from "./pages/second-page/second.page";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcarousel, fetchSections } from "./redux/reducer-slices/storeData";

//define the structure and content
function App() {
  const carouselStatus = useSelector(
    (state: any) => state.appData.carouselLoadingStatus
  );
  const sectionsStatus = useSelector(
    (state: any) => state.appData.sectionsLoadingStatus
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (carouselStatus === "idle") {
      dispatch(
        fetchcarousel(
          "/6wBTvMDaIvniHwmi48TUqB/64522293e6de384179658bd140ded000/slider.json"
        )
      );
    }
  }, []);

  useEffect(() => {
    if (sectionsStatus === "idle") {
      dispatch(
        fetchSections(
          "/7h9Hfb5ycGhgtRhEADZKqb/22238752942f2bf6eae6b1d4b6d209d7/home.json"
        )
      );
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout children={<Outlet />} />}>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<PageSecond />} />
      </Route>
    </Routes>
  );
}

//memo: skip rendering the component if its props have not changed
export default memo(App);
