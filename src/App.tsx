import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamEsports from "./pages/TeamEsports";
import TeamGC from "./pages/TeamGC";
import TeamAcademy from "./pages/TeamAcademy";
import News from "./pages/News";
import Schedule from "./pages/Schedule";
import Partners from "./pages/Partners";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename="/prod">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/esports" element={<TeamEsports />} />
          <Route path="/teams/gc" element={<TeamGC />} />
          <Route path="/teams/academy" element={<TeamAcademy />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
