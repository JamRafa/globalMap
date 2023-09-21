import { BrowserRouter, Routes, Route } from "react-router-dom";
import StructurePage from "../Components/StructurePage";
import MapPage from "../Pages/MapPage";
import { Provider } from "react-redux";
import store from "../Store";

export default function Paths() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StructurePage />}>
            <Route index element={<MapPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
