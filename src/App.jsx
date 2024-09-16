import { useState } from "react";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drag from "./DragComponents/Drag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drag />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
