
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Page404 from "./Page404";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
