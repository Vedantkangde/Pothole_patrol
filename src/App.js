import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from './Pages/Navbar'
import Home from "./Home";
import VideoUpload from "./Pages/VideoUpload";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video_upload" element={<VideoUpload/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}
