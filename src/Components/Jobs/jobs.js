import "./Jobs.css";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      <div className="jobs d-flex flex-direction-row flex-wrap gap-5 ">
        <div className="job1">
        <div  className="text-dark bg-info fw-bold rounded-3">Offcampus jobs</div>
          <Link to="" >Amazon offcampus drive | 2024</Link>
          <Link to="" >Infosys offcampus drive | 2023</Link>
          <Link to="" >Cognizant offcampus drive |2024</Link>
          <Link to="" >Capgemini offcampus drive | 2022</Link>
          <Link to="" >Microsoft offcampus drive | 2025</Link>
          <Link to="" >Facebook offcampus drive | 2024</Link>
          <Link to="" >Google offcampus drive | 2024</Link>
          <Link to="" >Cyient offcampus drive</Link>
          <Link to="" >First Source offcampus drive</Link>
        </div>
        <div className="job2">
        <div  className="text-dark bg-info fw-bold rounded-3">Walkin jobs</div>
        <Link to="" >Amazon Walkin drive | 2024</Link>
          <Link to="" >Infosys Walkin drive | 2023</Link>
          <Link to="" >Cognizant Walkin drive |2024</Link>
          <Link to="" >Capgemini Walkin drive | 2022</Link>
          <Link to="" >Microsoft Walkin drive | 2025</Link>
          <Link to="" >Facebook Walkin drive | 2024</Link>
          <Link to="" >Google Walkin drive | 2024</Link>
          <Link to="" >Cyient Walkin drive</Link>
          <Link to="" >First Source Walkin drive</Link>
        </div>
        <div className="job3">
        <div  className="text-dark bg-info fw-bold rounded-3">Remote jobs</div>
        <Link to="" >Amazon Remote jobs | 2024</Link>
          <Link to="" >Infosys Remote jobs | 2023</Link>
          <Link to="" >Cognizant Remote jobs |2024</Link>
          <Link to="" >Capgemini Remote jobs | 2022</Link>
          <Link to="" >Microsoft Remote jobs | 2025</Link>
          <Link to="" >Facebook Remote jobs | 2024</Link>
          <Link to="" >Google Remote jobs | 2024</Link>
          <Link to="" >Cyient Remote jobs</Link>
          <Link to="" >First Source Remote jobs</Link>
        </div>
        <div className="job4">
        <div className="text-dark bg-info fw-bold rounded-3">Internships</div>
        <Link to="" >Amazon Internship  | 2024</Link>
          <Link to="" >Infosys Internship  | 2023</Link>
          <Link to="" >Cognizant Internship  |2024</Link>
          <Link to="" >Capgemini Internship  | 2022</Link>
          <Link to="" >Microsoft Internship  | 2025</Link>
          <Link to="" >Facebook Internship  | 2024</Link>
          <Link to="" >Google Internship  | 2024</Link>
          <Link to="" >Cyient Internship </Link>
          <Link to="" >First Source Internship </Link>
         
        </div>
        <div className="job5">
        <div  className="text-dark bg-info fw-bold rounded-3">Govt Jobs</div>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
        </div>
        <div className="job6">
        <div  className="text-dark bg-info fw-bold rounded-3">Bank Jobs</div>
        <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
          <Link to="" >Amazon offcampus drive</Link>
        </div>
      </div>
    </>
  );
}

export default Jobs;