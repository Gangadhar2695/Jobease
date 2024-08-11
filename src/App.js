import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer.js";
import Login from "./Components/Login/Login.js";
import Application from "./Components/Application/Application.js";
import Interviews from "./Components/Interview/Interviews.js";
import Technical from "./Components/InterviewQAS/Technical.js";
import Behaviour from "./Components/InterviewQAS/Behaviour.js";
import Software from "./Components/InterviewQAS/Software.js";
import Business from "./Components/InterviewQAS/Business.js";
import Java from "../src/Components/Java/Java.js";
import Javascript from "./Components/InterviewQAS/Javascript.js";
import Python from "./Components/InterviewQAS/Python.js";
import React from "./Components/InterviewQAS/React.js";
import Home from "./Components/Home.js";
import Resumes from "./Components/Resumes/Resumes.js";
import Certifications from "../src/Components/Certifications/Certifications.js";
import Subscribe from "./Components/Subscribe/Subscribe.js";
import JobCategory from "../src/Components/JobCategory.js"
import LocationSort from "./Components/LocationSort";
import GraduationSort from "./Components/GraduationSort.js";
import FreeResumes from "./Components/Freeresume/FreeResumes.js";


export default function App() {


  return (
    <div className="App ">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="/:category" element={ <JobCategory />}> </Route>
          <Route exact path="/Category/location/:locations" element={ <LocationSort/>}> </Route>
          <Route exact path="/Category/graduation/:graduation" element={ <GraduationSort/>}> </Route>
          <Route exact path="/Offcampus/jobs/:path" element={<Application />}></Route>
          <Route exact path="/Walkin/jobs/:path" element={<Application />}></Route>
          <Route exact path="/Remote/jobs/:path" element={<Application />}></Route>
          <Route exact path="/Startups/jobs/:path" element={<Application />}></Route>
          <Route exact path="/Internships/jobs/:path" element={<Application />}></Route>
          <Route exact path="/interview" element={<Interviews />}></Route>
          <Route exact path="/business" element={<Business />}></Route>
          <Route exact path="/behaviour" element={<Behaviour />}></Route>
          <Route exact path="/technical" element={<Technical />}></Route>
          <Route exact path="/software" element={<Software />}></Route>
          <Route exact path="/java" element={<Java />}></Route>
          <Route exact path="/python" element={<Python />}></Route>
          <Route exact path="/javascript" element={<Javascript />}></Route>
          <Route exact path="/react" element={<React />}></Route>
          <Route exact path="/resumes" element={<FreeResumes />}></Route>
          <Route exact path="/certifications" element={<Certifications />}></Route>
          <Route exact path="/subscribe" element={<Subscribe />}></Route>
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}
