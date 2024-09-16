import { useState } from "react";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drag from "./DragComponents/Drag";
import ModalExample from "./ModalComponent/ModalExample";
import Static from "./Position/StaticExample/Static";
import StaticPages from "./Position/StaticExample/StaticPages";
import FixedPages from "./Position/FixedExampel/FixedPages";
import Sticky from "./Position/StickyExample/Sticky";
import StickyPages from "./Position/StickyExample/StickyPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drag />} />
          <Route path="/modal" element={<ModalExample />} />
          <Route path="/fixed" element={<FixedPages />} />
          <Route path="/static" element={<StaticPages />} />
          <Route path="/sticky" element={<StickyPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
