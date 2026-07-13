import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Friday from "./pages/Friday";
import Saturday from "./pages/Saturday";
import RSVP from "./pages/RSVP";
import Dresscode from "./pages/Dresscode";
import Info from "./pages/Info";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/friday" element={<Friday />} />
          <Route path="/saturday" element={<Saturday />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/dresscode" element={<Dresscode />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
