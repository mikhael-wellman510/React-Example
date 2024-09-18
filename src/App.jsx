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
import DrawerPages from "./Drawer/DrawerPages";
import InputFile from "./Input File/InputFile";
import InputPages from "./Input File/InputPages";
import Lines from "./Lines/Lines";

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
          <Route path="/drawer" element={<DrawerPages />} />
          <Route path="/inputFile" element={<InputPages />} />
          <Route path="/lines" element={<Lines />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
