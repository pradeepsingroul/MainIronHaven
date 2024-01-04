import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Trainer from "./Trainers/Trainer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Plan from "./Plans/Plan";


export default function AllRoutes() {

    return <div>
        <Routes>
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="trainers" element={<Trainer/>} />
            <Route path="plans" element={<Plan />} />
            <Route path="" element={<Home />} />
        </Routes>
    </div>
}