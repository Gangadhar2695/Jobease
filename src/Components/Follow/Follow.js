import "../Follow/Follow.css";
import Subscribe from "../Subscribe/Subscribe.js";
import { Link } from "react-router-dom";

const Follow = () => {
  return (
    <>

      <div className="container d-flex flex-row flex-wrap justify-content-center  Follow ">
       
        <div className="col-6-lg m-auto follow2">
          <h4 className="fw-bolder text-start text-dark my-4">Follow us on Here :</h4>
          <div className="">
          <ul className="d-flex flex-wrap flex-row gap-3 align-items-center">
            <Link to="#"><li><img src="./images/instagram.png" className="follow-us" /></li></Link>
            <Link to="#"><li><img src="./images/twitter.png" className="follow-us" /></li></Link>
            <Link to="#"><li><img src="./images/youtube.png" className="follow-us" /></li></Link>
            <Link to="#"><li><img src="./images/facebook.png" className="follow-us" /></li></Link>
          </ul>
          </div>      
        </div>

        <div className="col-6-lg m-auto "><Link to="/subscribe"><Subscribe/></Link></div>
      </div>
    </>
  )
}

export default Follow;