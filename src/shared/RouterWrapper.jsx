import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const RouterWrap = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default RouterWrap;
