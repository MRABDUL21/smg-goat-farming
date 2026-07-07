import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Goats from "./pages/Goats";
import NattyHens from "./pages/NattyHens";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goats" element={<Goats />} />
        <Route path="/hens" element={<NattyHens />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;