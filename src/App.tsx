import './App.css';
import React from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from './pages/home-page/home.page';
import { Layout } from './utils/layout.page';
import { PageSecond } from './pages/second-page/second.page';

//define the structure and content
const App = () => (
  <Routes>
    <Route path="/" element={<Layout children={<Outlet />} />} >
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<PageSecond />} />
      </Route>
  </Routes>
);

//memo: skip rendering the component if its props have not changed
export default App;
