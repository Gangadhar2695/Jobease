import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import Similarjobs from './Similarjobs';
import Socialmedia from '../Socialmedia';
import JobsByCategory from './JobsByCategory';

const GraduationSort = () => {

  const { data } = useContext(DataContext);
  const { graduation } = useParams();

  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchItems, setSearchItems] = useState(false);


  const handleSearch = () => {
    const filtered = filteredData.filter(
      (item) =>
        item.Role.toLowerCase().includes(job.toLowerCase()) &&
        item.Location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
    setSearchItems(true)
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter(item => item.Grad.toLowerCase() === graduation.toLowerCase());
  // console.log('filterdata', filteredData)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const Pagination = ({ totalPages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className='d-flex flex-row gap-2 m-3 justify-content-center bg-light'>
        <button className='btn btn-dark'>Prev</button>
        {pageNumbers.map(number => (
          <div key={number} className="page-item">
            <button onClick={() => paginate(number)} className="btn btn-primary ">
              {number}
            </button>
          </div>
        ))}
        <button className='btn btn-dark'>Next</button>

      </div>
    );
  };


  return (
    <>
      <div className="jobcategory d-flex flex-column flex-wrap gap-5 rounded-2 bg-light">

        <div className='jobcategoryOne d-flex flex-row justify-content-center mt-3  align-items-center flex-wrap  container '>
          <div ><h4 className="remote-header col-6-lg"><marquee width="100%" direction="left" scrollamount="10" > JOBS For {graduation} Graduates</marquee></h4></div>
          <div className='col-6-lg'>
            <div className="search d-flex flex-row flex-wrap mt-3 py-3">
              <input type="search" placeholder="Job" onChange={(e) => setJob(e.target.value)} />
              <input type="search" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
              <button onClick={handleSearch} className="btn btn-light text-white fw-bold rounded-2 bg-info"><i className="fa fa-search me-2" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>

        <div className='d-flex flex-row flex-wrap jobcategory-two'>
          <div className='d-flex flex-column p-3 offcampus'>
            {(searchItems ? filteredJobs : currentItems).map((item) => (
              <div className="card cards mb-3" key={item.Url}>
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between m-1">
                    <div className="left d-flex flex-column">
                      <div className="text-start"><h6>{item.Role}</h6></div>
                      <div className="d-flex flex-row gap-3">
                        <p className="text-start">
                          <span className="mx-2">
                            <i className="fa fa-building" aria-hidden="true"></i>
                          </span>
                          {item.Company}
                        </p>
                        <p className="text-start">
                          <span className="mx-2">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          {item.Exp}
                        </p>
                        <p className="text-start">
                          <span className="mx-2">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          {item.Location}
                        </p>
                        <p className="text-start">
                          <span className="mx-2">
                            <i className="fa-solid fa-sack-dollar" aria-hidden="true"></i>
                          </span>
                          {item.Sal}
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <img src={item.Img} alt="not found" height="50px" width="80px"  className='card-images'  />
                    </div>
                  </div>
                  <div className="text-dark mt-2">
                    <p className="text-start">
                      <span className="mx-2">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      {item.Desc}
                    </p>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between align-items-center p-1 bg-white">
                    <div className="text-dark">Posted: {item.Days}</div>
                    <Link to={`/${item.Category}/jobs/${item.Url}`}>
                      <button className="btn btn-dark text-white fw-bold ">CONTINUE<i className="fa fa-external-link-square ms-1" aria-hidden="true"></i></button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <Pagination totalPages={totalPages} paginate={paginate} />

          </div>

          <div className=" m-5 d-flex flex-column sidebar">

            <div className='m-auto'>
              <Socialmedia />
            </div>
            <div>
              <Similarjobs />
            </div>
          </div>
        </div>

      </div>
      <div className='w-100 d-flex justify-content-center my-5'>
        <JobsByCategory />
      </div>
    </>
  )
}


export default GraduationSort;
