import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/1440px main/MainWrapper";
import Mainlayout from "./main_path_component/Mainlayout";
import MainAllInAll from "./components/1440px all/MainAllInAll";
import SmallAll from "./components/1440px small all/SmallAllMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainlayout></Mainlayout>}>
            <Route index element={<MainPage></MainPage>}></Route>
            <Route path="all" element={<MainAllInAll></MainAllInAll>}></Route>
            <Route path="small-all" element={<SmallAll></SmallAll>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
