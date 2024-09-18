import "../src/dist/styles.css";
// import About from "./Pages/OldPages/About";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AllVehiclesPage from "./Pages/AllVehicles/AllVehiclesPage";
import VehicleDetail from "./Pages/VehicleDetails/VehicleDetailsPage";
// import Models from "./Pages/Models";
// import TestimonialsPage from "./Pages/TestimonialsPage";
// import Team from "./Pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/all-vehicles" element={<AllVehiclesPage />} />
        <Route path="/vehicle/:vehicleId" element={<VehicleDetail />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="all-vehicles" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
