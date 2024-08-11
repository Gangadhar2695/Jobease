import { Link } from "react-router-dom";


const JobsByCategory = () => {

  return (
    <>

      <div className=" JobsByCategory px-3 ">
        <h5 className=" w-100 rounded-2 text-white text-start fw-bold mb-3  p-2"><marquee width="100%" direction="left" scrollamount="10" >Choose Jobs by Location Graduation YearofPassing and Category</marquee></h5>

        <table className="table ">
          <thead>
            <tr >
              <th scope="col"> Location</th>
              <th scope="col"> Graduation</th>
              <th scope="col"> YearOfPassing</th>
              {/* <th scope="col"> Category</th> */}
            </tr>
          </thead>
          <tbody className="JobByCategory" >
            <tr>
              <td><Link to="/Category/location/Hyderabad">Hyderabad</Link></td>
              <td><Link to="/Category/graduation/BTECH">BTECH</Link></td>
              <td><Link to="/Category/yop/2025">2025</Link></td>
              {/* <td><Link to="/Offcampus">Offcampus</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Bengaluru">Bengaluru</Link></td>
              <td><Link to="/Category/graduation/BCA">BCA</Link></td>
              <td><Link to="/Category/yop/2024">2024</Link></td>
              {/* <td><Link to="/Walkin">Walkin</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Chennai">Chennai</Link></td>
              <td><Link to="/Category/graduation/BSC">BSC</Link></td>
              <td><Link to="/Category/yop/2023">2023</Link></td>
              {/* <td><Link to="/Remote">Remote</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Delhi">Delhi</Link></td>
              <td><Link to="/Category/graduation/Diploma">Diploma</Link></td>
              <td><Link to="/Category/yop/2022">2022</Link></td>
              {/* <td><Link to="/Startups">Startups</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Pune">Pune</Link></td>
              <td><Link to="/Category/graduation/SSC">SSC/12th</Link></td>
              <td><Link to="/Category/yop/2021">2021</Link></td>
              {/* <td><Link to="/Internships">Internships</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Noida">Noida</Link></td>
              <td><Link to="/Category/graduation/BCOM">BCOM</Link></td>
              <td><Link to="/Category/yop/2020">2020</Link></td>
              {/* <td><Link to="/Banking">Banking</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Kolkata">Kolkata</Link></td>
              <td><Link to="/Category/graduation/MTECH">MTECH</Link></td>
              <td><Link to="/Category/yop/2019">2019</Link></td>
              {/* <td><Link to="/Government">Government</Link></td> */}
            </tr>
            <tr>
              <td><Link to="/Category/location/Gurgaon">Gurgaon</Link></td>
              <td><Link to="/Category/graduation/MCA">MCA</Link></td>
              <td><Link to="/Category/yop/2018">2018</Link></td>
            </tr>
            <tr>
              <td><Link to="/Category/location/Vizag">Hyderabad</Link></td>
              <td><Link to="/Category/graduation/PGDM">Hyderabad</Link></td>
              <td><Link to="/Category/yop/2017">2017</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default JobsByCategory;