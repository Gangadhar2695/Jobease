import "../Landingpage/Landing.css";
import Scrolllandpage from "../Scrolllandpage/Scrolllandpage.js";

const Landingpage = () => {
  return (
    <>
      <div className="landingpage d-flex flex-column  flex-wrap gap-5 bg-light ">


        <div className="d-flex flex-row  flex-wrap container land">
          <div className="col-12 col-lg-6">
            <h1 className="text-start fw-bold">Discover Your <br />Dream Job with <br /><span className="text-info">JOBEase</span></h1>
            <p className="text-secondary  text-start">Discover top opportunities now with JobEase.
              Connect leading <br/> employees and Jobs over india and take the next step in your career today.</p>

            <div className="search d-flex flex-row flex-wrap mt-3">
              <input type="search" placeholder="Job" />
              <input type="search" placeholder="location" />
              {/* <input type="search" placeholder="Experience" /> */}
              <button className="btn btn-light text-white fw-bold rounded-2 bg-info"><i className="fa fa-search me-2" aria-hidden="true"></i>Search</button>
            </div>
          </div>

          <div className="d-flex justify-content-around align-content-center col-12 col-lg-6">
            <img className="col-8 rounded-2" src="./images/right.png" alt="adobe2" height="330px" />
          </div>

        </div>

        <div className="col-12 over ">
          <Scrolllandpage />
        </div>


      </div>
    </>
  )
}

export default Landingpage;