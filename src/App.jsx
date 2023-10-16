import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Carousel from "./components/Carousel/Carousel";
import { BarLoader } from "react-spinners";
//import Services from "./components/Services";
import Footer from "./components/Footer";
//screens
import Expertise from "./screens/Expertise";
import Staffing from "./screens/Staffing";
import Solutions from "./screens/Solutions";
import Approach from "./screens/Approach";
import Continuity from "./screens/Continuity";
import Contact from "./screens/Contact";
import Company from "./components/Company";
import Blogs from "./screens/Blogs";
import BlogPost from "./screens/BlogPost";
// import Testimonial from "./components/Testimonial";
// import Company from "./screens/Company";
import Jobs from "./screens/Jobs";
import JobsDetails from "./screens/JobsDetails";
import JobPost from "./screens/JobPost";
import Toastify from "./components/Toastify/Toastify";
// import BlogCategory from "./screens/BlogCategory";
// import BlogSingle from "./screens/BlogSingle";
import Team from "./components/Team/Team";
import Jide from "./components/Team/Jide";
import Paul from "./components/Team/Paul";
import Princess from "./components/Team/Princess";
import Forgotpass from "./screens/Forgotpass";
import MyApplications from "./screens/MyAplications";
import VerifyEmail from "./screens/VerifyEmailScreen";
import Login from "./screens/Login";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // loader
    setTimeout(() => setLoader(false), 5000);
  }, []);

  return (
    <div className="p-0 w-auto h-auto bg-white">
      {loader === false ? (
        <Router>
          <Toastify />
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/staffing" element={<Staffing />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/continuity" element={<Continuity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/team" element={<Team />} />
            <Route path="/jide" element={<Jide />} />
            <Route path="/princess" element={<Princess />} />
            <Route path="/paul" element={<Paul />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/my/applications" element={<MyApplications />} />
            <Route path="/blog/post" element={<BlogPost />} />
            <Route path="/job/post" element={<JobPost />} />
            <Route path="/job/:id" element={<JobsDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpass" element={<Forgotpass />} />
            <Route
              path="/user/verify/:id/:veri_key"
              element={<VerifyEmail />}
            />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <div className="loader">
          <BarLoader size={50} thickness={200} speed={50} color="#1bdb64" />
        </div>
      )}
    </div>
  );
}
export default App;
