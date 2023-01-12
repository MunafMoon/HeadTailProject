import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home"
import About from "./component/About"
import HeadTail from "./component/HeadTail"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/head-tail" element={<HeadTail/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App