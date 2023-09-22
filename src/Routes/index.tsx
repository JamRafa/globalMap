import { BrowserRouter, Routes, Route } from "react-router-dom";
import StructurePage from "../Components/StructurePage";
import { Provider } from "react-redux";
import store from "../Store";
import Historic from "../Pages/historic";

export default function Paths() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StructurePage />}>
            <Route path="/historic" element={<Historic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
