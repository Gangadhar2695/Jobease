import { useState, useEffect } from "react";
import "../Components/Application/Application.css";
import { Link } from "react-router-dom";


const Similarjobs = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const similar = await fetch("http://localhost:3000/similarjobs");
        const result = await similar.json();
        setJobs(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log('jobs', jobs)


  return (
    <>

      <div className="similar-jobs d-flex-flex-column gap-4 py-5 ">
        <h5 className=" text-start fw-bold  ps-3">Latest Jobs</h5>

        {jobs.map((job) => (
          <Link to={job.link}>
            <div className="latest-jobs d-flex flex-row gap-3 ">
              <div>
                <img src={job.image} height="100px" width="150px" />
              </div>
              <div>
                <p className="text-start fw-1">{job.Description}</p>
                <p className="text-secondary text-start">{job.Posted}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </>
  )


}

export default Similarjobs;