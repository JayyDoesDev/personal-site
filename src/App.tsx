import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/retroui/Page";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Tools from "./pages/Tools/Tools";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
