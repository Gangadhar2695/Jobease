import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="footer d-flex flex-column flex-wrap foot">
        <div className="top  d-flex flex-row flex-wrap justify-content-around gap-2 ">
          <div className="top4 d-flex flex-column flex-wrap justify-content-start gap-1 ">
            <div>
              <h4 className="text-white fw-bold text-start">JOBEase</h4>
            </div>

            <div className="">
              <p className="text-white text-start ">Jobnow is a platform where users
                can apply  <br />for hundereds of job openings  in top companies <br />
                and start their career  dream companies.</p>
            </div>

            <hr />

            <div>
              <ul className="d-flex flex-wrap flex-row gap-3 align-items-center list-unstyled">
                <Link to=""><li><i class="fa-brands fa-telegram fa-2xl"></i></li></Link>
                <Link to=""><li><i class="fa-brands fa-square-x-twitter fa-2xl"></i></li></Link>
                <Link to=""> <li><i class="fa-brands fa-instagram fa-2xl"></i></li></Link>
                <Link to=""><li><i class="fa-brands fa-whatsapp fa-2xl"></i></li></Link>
              </ul>
            </div>
          </div>

          <div className="top2 ">
            <ul className="text-start list-unstyled link-unstyled">
              <li className="text-info fw-bold  mb-2 ">Categoris</li>

              <Link to="/Offcampus">  <li><i className="fa-sharp fa-light fa-greater-than  me-2"></i>Offcampus Jobs  </li></Link>
              <Link to="Walkin">  <li><i className="fa-sharp fa-light fa-greater-than  me-2"></i> Walkin Drives </li></Link>
              <Link to="/Remote">  <li><i className="fa-sharp fa-light fa-greater-than  me-2"></i> Remote Jobs  </li></Link>
              <Link to="/Internships">  <li><i className="fa-sharp fa-light fa-greater-than  me-2"></i> Internships </li></Link>
              <Link to="/Startups">  <li><i className="fa-sharp fa-light fa-greater-than  me-2"></i> Internships </li></Link>

            </ul>
          </div>

          <div className="top1 ">
            <ul className="text-start list-unstyled link-unstyled">
              <li className="text-info fw-bold mb-2 ">Quick Links</li>

              <Link to="/interview"><li><i className="fa-sharp fa-light fa-greater-than  me-2"></i>Interiew Q/As </li> </Link>
              <Link to="/resumes"><li><i className="fa-sharp fa-light fa-greater-than  me-2"></i>Free Resumes</li></Link>
              <Link to="/certifications"><li><i className="fa-sharp fa-light fa-greater-than  me-2"></i>Certifications</li></Link>
              <Link to="https://www.coursera.org/courses?query=free"><li><i className="fa-sharp fa-light fa-greater-than  me-2"></i> Courses</li></Link>

            </ul>
          </div>

          <div className="top3 ">
            <ul className="text-start list-unstyled link-unstyled">
              <li className="text-info fw-bold  mb-2 ">Connect With Us</li>

              <li><i class="fa-solid fa-location-dot"></i> Uppal, Hyderabad, India  </li>
            <li><i className="fa-regular fa-envelope  me-2"></i>gangadhar.veeravalli09@gmail.com  </li>
                <li><i class="fa-solid fa-phone"></i> +91 0987654321   </li>

            </ul>
          </div>

        </div>


      </div>
    </>
  );
};

export default Footer;
