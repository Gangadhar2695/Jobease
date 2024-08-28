import "../Application/Application.css";
import Similarjobs from "../Similarjobs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import JobsByCategory from "../JobsByCategory";


const Application = () => {
  const [newitem, setNewItem] = useState();
  const params = useParams();
  // console.log('params',params.path)

  const { appdata } = useContext(DataContext);
  // console.log('ad', appdata)

  useEffect(() => {
    const newItem = appdata.find((items) => items.Url === params.path)
    // console.log(newItem)
    setNewItem(newItem)
    // console.log('new item', newItem)
  }, [appdata])




  return (
    <>
      <div className="d-flex flex-row flex-wrap gap-5 my-4 ">
        {newitem ? (

          <div className="application d-flex flex-column justify-content-start gap-4 ">

            <h2 className="title  ">{newitem.title}</h2>


            <img src={newitem.thumbnail} alt="plan" />
            <div className="d-flex flex-row justify-content-between mx-4">
              <span className="text-secondary  ">{newitem.lastUpdated}</span>
              <span className="text-secondary ">Updated By: Gangadhar</span>
            </div>


            <h3 className="text-center text-dark off">{newitem.detailsHeader}</h3>
            <table className="table table-bordered details">
              <thead>
                <tr>
                  <td>Role</td>
                  <td>{newitem.details.role}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Experience</td>
                  <td>{newitem.details.experience}</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>{newitem.details.qualification}</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td>{newitem.details.salary}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{newitem.details.location}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <a href={newitem.details.website}>{newitem.details.website}</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <h5 className="text-start text-info">Key Skills:</h5>
              <ol className="text-start">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium, quis.
                </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              </ol>
            </div>
            <div>
              <h5 className="text-start text-info">Job Description:</h5>
              <ul className="text-start">
                <li>
                  Lorem ipsum duor sit, amet consectetur adipisicing elit.
                  Laudantium, quis.
                </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-start text-info">
                To apply for this Drive candidates must follow steps mentioned
                below:{" "}
              </h5>
              <ul className="text-start">
                <li>
                  Click on "Apply Here" button given below to apply directly for
                  this Job. .
                </li>
                <li>
                  You will redirected to company official website to fill
                  Application form.
                </li>
                <li>
                  If you are a new user and dont have an account before please
                  create one.
                </li>
                <li>
                  Then Login using your credentials and fill application form with
                  accurate data.
                </li>
                <li>
                  Submit all relevant documents, if requested (e.g. resume, mark
                  sheet, ID proof).
                </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              </ul>
            </div>


            <div className=" border border-2 border-white rounded-3  p-3">
              <p className="text-dark bg-warning fw-bolder">{ }</p>
              <div className="my-4 ">
                <img src="./images/jobease.png" alt="JOBEASE" />
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button className="btn-77"><a className="link-unstyled text-white me-2" href={newitem.joblink}>Apply Here</a>
                 <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>



            <div className="share d-flex flex-row flex-wrap my-5 justify-content-between">
              <div>
                <ul className="d-flex flex-row flex-wrap gap-2 align-items-center list-unstyled ">
                  <li className="text-dark fw-bold ">Share Job:</li>
                  <li>
                    <a>
                      <i className="fa-brands fa-twitter fa-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <i className="fa-brands fa-instagram fa-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <i className="fa-brands fa-facebook fa-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <i className="fa-brands fa-google fa-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <i className="fa-brands fa-youtube fa-xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="d-flex flex-row gap-2 list-unstyled">
                  <li className="text-dark mt-3 fw-bold ">Is This Helpful?</li>
                  <li>
                    <a>
                      <i class="fa-solid fa-thumbs-up fa-beat"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <i class="fa-solid fa-thumbs-down"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="d-flex flex-column flex-wrap gap-4 my-1 py-5 bg-light">
              <div className="text-primary fw-bold fs-5">JOIN  US  ON  SOCIAL  MEDIA</div>
              <div className=" d-flex flex-row flex-wrap justify-content-center gap-4 ms-2 py-3">
                <Link to="https://wa.me/7989992024"><button className="btn-77 border border-white border-2 btn bg-success text-white fw-bold"><span className="me-1"><i class="fa-brands fa-whatsapp fa-lg"></i></span>CLICK HERE 2 JOIN WhatsApp </button></Link>
                <Link to="/jobease/telegram"> <button className="btn-77 border border-white border-2 btn bg-primary text-white fw-bold"><span className="me-1"><i class="fa-brands fa-telegram fa-lg"></i></span>CLICK HERE 2 JOIN  Telegram </button></Link>
                <Link to="/jobease/instagram"> <button className="btn-77 border border-white border-2 btn bg-secondary text-white fw-bold"><span className="me-1"><i class="fa-brands fa-instagram fa-lg"></i></span>CLICK HERE 2 JOIN  Instagram </button></Link>
                <Link to="/jobease/x"> <button className="btn-77 border border-white border-2 btn bg-danger text-white fw-bold"><span className="me-1"><i class="fa-brands fa-twitter fa-lg"></i></span>CLICK HERE 2 JOIN  twitter X </button></Link>
              </div>
            </div>


            <div className="text-start bg-light">
              <h3 className="text-dark">About Company:</h3>
              <p className="text-dark">
                <img src={newitem.logo} className="image" />
                {newitem.description}
              </p>
            </div>

            <div className="my-4">
              <h4 className="text-dark fw-bold text-start mb-4">
                OFF CAMPUS Frequently Asked Questions{" "}
              </h4>

              <div className="accordion">
                <ul className="accordions text-start">
                  <li>
                    <input type="radio" name="radio" id="first" checked readOnly />
                    <label htmlFor="first">What is Amazon Hiring Process</label>
                    <div className="content">
                      <p>
                        Amazon consits of one screening round for assesment
                        and followeed by communication test and finally an interview.
                      </p>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <input type="radio" name="radio" id="two" />
                    <label htmlFor="two">What is salary offered for this role</label>
                    <div className="content">
                      <p>
                        Freshers offered upto 3.5 lpa to 4.5 lpa for this
                        particular role and for experienced it depends.
                      </p>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <input type="radio" name="radio" id="three" />
                    <label htmlFor="three">What is Amazon main motive</label>
                    <div className="content">
                      <p>
                        Amazon is an ecommerce store that offers wide range deliveries of products
                        using agents and provide remarkable service to the customers.
                      </p>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <input type="radio" name="radio" id="four" />
                    <label htmlFor="four">Who is amazon current CEO</label>
                    <div className="content">
                      <p>
                        AmazON curernt ceo is Jeff Bezos.
                      </p>
                    </div>
                  </li>
                </ul>





              </div>

            </div>

            <div className="text-start mt-4">
              <h4 className="text-dark fw-bold  text-start mb-4">
                Some Important content for Job Seekers
              </h4>
              <table className="table border-less">
                <tbody>
                  <tr>
                    <td>
                      <a href="#hranswers">
                        Common HR Interview Questions and Answers for freshers
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        Common TR Interview Questions and Answers for freshers
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        Behavioural Interview Questions and Answers for freshers
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        Software Engineer Interview Questions and Answers for
                        freshers
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        Business Process Outsourcing(BPO) Interview Questions for
                        freshers
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        Common Interview Questions for Experienced Candidates
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-dark fw-bold text-start">Suggested Jobs:</h4>
            <div className="card-group d-flex flex-row flex-wrap gap-2 suggested">
              <a href="#">
                <div className="card">
                  <img
                    src="data:image/jpeg;base64,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"
                    class="card-img-top"
                    alt="..."
                  />
                  <div className="card-body p-3">
                    <h5 className="card-title fw-bold text-dark">
                      Software Engineer
                    </h5>
                    <p className="card-text text-secondary">
                      Experience: 0-4years
                      <br />
                      Graduation: BTECH
                      <br />
                      Location: Hyderabad
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cmCptKi7Ra5lCjD1Bt2r0Hh31dnC3zJVTA&s"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">QA Testing Analyst</h5>
                    <p className="card-text text-secondary">
                      Experience: 5-7years
                      <br />
                      Graduation: MCA
                      <br />
                      Location: Hyderabad
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated: 1day ago</small>
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUm5TRdVbQam4VQXW0g2k345JjeJ6b51m3w&s"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">RPA Automation</h5>
                    <p className="card-text text-secondary">
                      Experience: 1-5years
                      <br />
                      Graduation: BTECH
                      <br />
                      Location: Hyderabad
                    </p>
                    <p className="card-text text-secondary">
                      <small className="text-muted">Last updated: 4hrs ago</small>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="comment my-5 bg-light py-5">
              <h4 className=" text-start mb-4 ">Leave Your Comment</h4>
              <form className="form">
                <div className="col-8 m-auto">
                  <label className="sr-only" for="inlineFormInputGroup">
                    Username
                  </label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text p-3">
                        <i className="fa-solid fa-user "></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-8 m-auto">
                  <label className="sr-only" for="inlineFormInputGroup">
                    Username
                  </label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text p-3">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Leave us comment Here...."
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <div className="col-8 m-auto">
                    <button type="submit" class="btn btn-primary">
                      POST COMMENT
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="fw-bold text-start d-flex flex-column gap-3">
              <div>Join our telegram channel here  <Link to="/telegram"> Click Here</Link></div>
              <div>Join our WatsApp channel here  <Link to="/watsapp"> Click Here</Link></div>
              <div>Join our Instagram channel here <Link to="/instagram"> Click Here</Link></div>
              <div>Download free ATS Template Resumes to get Shortlisted  <Link to="/resumes"> Click Here</Link></div>
            </div>


            <JobsByCategory />
          </div>

        ) : <div>Error Loading...</div>}

        <Similarjobs />

      </div>

    </>
  );
};

export default Application;
