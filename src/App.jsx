import Library from "./Library";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Year1 from "./Year1";
import Year2 from "./Year2";
import Year3 from "./Year3";
import Year4 from "./Year4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/1st_year" element={<Year1 />} />
                <Route path="/2nd_year" element={<Year2 />} />
                <Route path="/3rd_year" element={<Year3 />} />
                <Route path="/4th_year" element={<Year4 />} />
                <Route path="/library" element={<Library />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;