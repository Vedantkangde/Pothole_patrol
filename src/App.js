import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import { Courses } from "./Pages/Courses";
import Resources from "./Pages/Resource";
import { OnlineLearning } from "./Pages/OnlineLearning";
import {Navbar} from './Pages/Navbar'
import Home from "./Home";
import Video_upload from "./Pages/Video_upload";
import Signin from "./Pages/Signin";
import VideoUpload from "./Pages/VideoUpload";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/OnlineLearning" element={<OnlineLearning />} />
          <Route path="/Video_upload" element={<VideoUpload/>} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}
