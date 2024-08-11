import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {

  const [Menu, setShowMenu] = useState(false);
  const [Login, setLogin] = useState(false);
  const [searchInput, setSearchInput] = useState("")



  const showMenu = () => {
    const hammenu = document.getElementById("Navbar")
    hammenu.classList.toggle("clicked")
    setShowMenu(!Menu);
  }

  const handleLogin = () => {
    const login = document.getElementById("login-btn")
    login.classList.toggle("active")
    setLogin(!Login)
  }

  const handleSidebar = () => {
    const hammenu = document.getElementById("Navbar")
    hammenu.classList.toggle("clicked")
    setShowMenu(!Menu);
  }

  const handledrop = () => {
    document.getElementById("drop1").classList.toggle("drop");
  }


  const handledropped = () => {
    document.getElementById("drop2").classList.toggle("droped");
  }


  const handledropping = () => {
    document.getElementById("drop3").classList.toggle("droping");
  }
  return (
    <>
      <nav className="nav d-flex  flex-wrap justify-content-around align-items-center ">
        <a href="https://www.linkedin.com/in/gangadhar-veeravalli/">
          <h4 className="text-dark fw-bold">JOBEase</h4>
        </a>
        <ul className="navbar list-unstyled fw-bold fs-7  text-uppercase  gap-1">
          <li className=" rounded-2 p-2 "><Link to="/">Home</Link></li>

          <li className=" rounded-2 p-2 position-relative">
            Jobs<i className="fa-solid fa-angle-down"></i>
            <div className="dropdown bg-white text-black  border border-light border-3">
              <ul className=" list-unstyled d-flex flex-column">
                <li className=" rounded-2 p-2 "><Link to="/Offcampus">Off Campus Jobs</Link></li>
                <li className=" rounded-2 p-2 "><Link to="/Walkin">Walkin-Drives</Link></li>
                <li className=" rounded-2 p-2"><Link to="/Internships">Internships</Link></li>
                <li className=" rounded-2 p-2"><Link to="/Startups">Startups</Link></li>
                <li className=" rounded-2 p-2"><Link to="/Remote">Remote Jobs</Link></li>
              </ul>
            </div>
          </li>
          <li className="rounded-2 p-2 position-relative">
            Interviews <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-two bg-white text-black border border-light border-3 ">
              <div className="d-flex flex-row gap-2 mx-3">
                <ul className=" list-unstyled d-flex flex-column flex-wrap">
                  <li className=" rounded-2 p-2 "><Link to="/interview">Interviews</Link> </li>
                  <li className=" rounded-2 p-2 "><Link to="/business">Business</Link></li>
                  <li className=" rounded-2 p-2"><Link to="/software">Software</Link></li>
                  <li className=" rounded-2 p-2"><Link to="/behaviour">Behaviour</Link></li>
                  <li className=" rounded-2 p-2 "><Link to="/technical">Technical</Link> </li>
                </ul>
                <ul className=" list-unstyled d-flex flex-column flex-wrap ">
                  <li className=" rounded-2 p-2 "><Link to="/java">Java</Link></li>
                  <li className=" rounded-2 p-2 "><Link to="/python">Python</Link></li>
                  <li className=" rounded-2 p-2"><Link to="/react">Reactjs</Link></li>
                  <li className=" rounded-2 p-2 "><Link to="/javascript">Javascript</Link> </li>
                  <li className=" rounded-2 p-2 "><Link to="/resumes">Resumes</Link></li>
                </ul>

              </div>

            </div>
          </li>
          <li className=" rounded-2 p-2 position-relative">Courses <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-three bg-white text-black border border-light border-3">
              <ul className=" list-unstyled d-flex flex-column justify-content-center align-items-center">
                <li className=" rounded-2 p-2 "><Link to="https://www.coursera.org/courses?query=free">COURSE ERA</Link></li>
                <li className=" rounded-2 p-2 "><Link to="https://www.classcentral.com/">CLASS CENTRAL</Link></li>
                <li className=" rounded-2 p-2"><Link to="https://pll.harvard.edu/course/cs50-introduction-computer-science">HARVARD CS50</Link></li>
                <li className=" rounded-2 p-2"><Link to="https://www.shiksha.com/online-courses/free-microsoft-courses-certification-training-v1659">MICROSOFT</Link></li>
                <li className=" rounded-2 p-2"><Link to="https://www.udemy.com/courses/free/?p=1">UDEMY</Link></li>
                <li className=" rounded-2 p-2"><Link to="https://grow.google/intl/en_in/certificates/">GOOGLE</Link></li>

              </ul>
            </div>
          </li>
          <li className=" rounded-2 p-2 position-relative">
            <Link to="/certifications">
              Certifications
            </Link>

          </li>
        </ul>

        <div className="d-flex flex-row flex-wrap gap-3">
          <div className="wrap-input-17"><div className="search-box">
            <button className="btn-search">🔍</button>
            <input type="text" className="input-search" placeholder="Search Jobs..." onChange={(e) => setSearchInput(e.target.value)} />
          </div>
          </div>
          <button id="login-btn" className="fw-bold glow-on-hover  apply text-uppercase login-form " onClick={() => handleLogin()} >
            <Link to="/login">
              SIGNUP
            </Link>
          </button>

          <div className="d-flex flex-row flex-wrap gap-4">
            <div className="bg-light account-login">
              <Link to="/Login"><i class="fa-solid fa-user fa-lg"></i></Link>
            </div>
            <div className="hamburger" id="hamburger" onClick={() => showMenu()}>
              <i class="fa-solid fa-bars fa-xl"></i>
            </div>
          </div>
        </div>
      </nav>



      <div className="mobile-sidebar" id="Navbar">
        {/* <div onClick={handleSidebar} > <i className="fa-solid fa-xmark fa-xl wrong"></i></div> */}
        <ul className=" text-start list-unstyled gap-1 ">
          <li className=" rounded-2 p-1 "><Link to="/">Home</Link></li>
          <li className=" rounded-2 p-2" onClick={handledrop}>
            Jobs<i className="fa-solid fa-angle-down"></i>
            <div className="drop1" id="drop1">
              <ul className=" list-unstyled d-flex flex-column">
                <li className=" rounded-2 p-1 "><Link to="/Offcampus">Off Campus Jobs</Link></li>
                <li className=" rounded-2 p-1 "><Link to="/Walkin">Walkin-Drives</Link></li>
                <li className=" rounded-2 p-1"><Link to="/Internships">Internships</Link></li>
                <li className=" rounded-2 p-1"><Link to="/Startups">Startups</Link></li>
                <li className=" rounded-2 p-1"><Link to="/Remote">Remote Jobs</Link></li>
              </ul>
            </div>
          </li>

          <li className="rounded-2 p-2" onClick={handledropped}>
            Interviews <i className="fa-solid fa-angle-down"></i>
            <div className="drop2 text-start" id="drop2">
              <div >
                <ul className=" list-unstyled">
                  <li className=" rounded-2 p-1 "><Link to="/interview">Interviews</Link> </li>
                  <li className=" rounded-2 p-1 "><Link to="/business">Business</Link></li>
                  <li className=" rounded-2 p-1"><Link to="/software">Software</Link></li>
                  <li className=" rounded-2 p-1"><Link to="/behaviour">Behaviour</Link></li>
                  <li className=" rounded-2 p-1 "><Link to="/technical">Technical</Link> </li>
                  <li className=" rounded-2 p-1 "><Link to="/java">Java</Link></li>
                  <li className=" rounded-2 p-1 "><Link to="/python">Python</Link></li>
                  <li className=" rounded-2 p-1"><Link to="/react">Reactjs</Link></li>
                  <li className=" rounded-2 p-1 "><Link to="/javascript">Javascript</Link> </li>
                  <li className=" rounded-2 p-1 "><Link to="/resumes">Resumes</Link></li>
                </ul>
              </div>

            </div>
          </li>

          <li className=" rounded-2 p-2 " onClick={handledropping}>Courses<i className="fa-solid fa-angle-down"></i>
            <div className=" drop3 text-start" id="drop3">
              <ul className=" list-unstyled ">
                <li className=" rounded-2 p-1 "><Link to="https://www.coursera.org/courses?query=free">Course Era</Link></li>
                <li className=" rounded-2 p-1 "><Link to="https://www.classcentral.com/">Class Central</Link></li>
                <li className=" rounded-2 p-1"><Link to="https://pll.harvard.edu/course/cs50-introduction-computer-science">Harvard CS50</Link></li>
                <li className=" rounded-2 p-1"><Link to="https://www.shiksha.com/online-courses/free-microsoft-courses-certification-training-v1659">Microsoft</Link></li>
                <li className=" rounded-2 p-1"><Link to="https://www.udemy.com/courses/free/?p=1">Udemy</Link></li>
                <li className=" rounded-2 p-1"><Link to="https://grow.google/intl/en_in/certificates/">Google</Link></li>
              </ul>
            </div>
          </li>

          <li className=" rounded-2 p-1 ">
            <Link to="/certifications">
              Certifications
            </Link>
          </li>

        </ul>


        <div className="sidebaricons d-flex flex-row gap-4 my-5 py-5">
          <Link to="/media/watsapp"><i className="fa-brands fa-whatsapp fa-2xl watsapp"></i></Link>
          <Link to="/media/instagram"><i className="fa-brands fa-instagram fa-2xl instagram"></i></Link>
          <Link to="/media/telegram"> <i className="fa-brands fa-telegram fa-2xl telegram"></i></Link>
          <Link to="/media/twitter"> <i className="fa-brands fa-twitter fa-2xl twitter"></i></Link>

        </div>
      </div>
    </>
  );
};

export default Nav;
