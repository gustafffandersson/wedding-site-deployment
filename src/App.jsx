import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Friday from "./pages/Friday";
import Saturday from "./pages/Saturday";
import RSVP from "./pages/RSVP";
import Dresscode from "./pages/Dresscode";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/friday" element={<Friday />} />
          <Route path="/saturday" element={<Saturday />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/dresscode" element={<Dresscode />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
