import { useState } from "react";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drag from "./DragComponents/Drag";
import ModalExample from "./ModalComponent/ModalExample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drag />} />
          <Route path="/modal" element={<ModalExample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
