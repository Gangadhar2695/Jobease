import "./Sorting.css";
import { Link } from "react-router-dom";

const Sorting = () => {
  return (
    <>
      <div className="sort d-flex flex-column flex-wrap gap-5 ">

        <h4 className="text-dark fw-bold">Jobs by Location & Qualification</h4>

        <div className="sort1 d-flex flex-wrap flex-row gap-3">
          <Link to="/Category/location/Hyderabad"> <div className="location"><img src="https://img.staticmb.com/mbcontent/images/crop/uploads/2023/3/charminar-hyderabad-featured-image%20(1)_0_1200.jpg" alt="sort" /><p>Hyderabad</p></div></Link>
          <Link to="/Category/location/Bengaluru">    <div className="location"><img src="https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg?sharp=10&vib=20&w=1200&w=600&h=400" />Bengaluru</div></Link>
          <Link to="/Category/location/Chennai">     <div className="location"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKIBALVCDr5VrafTPYxJ2QueU50ZlpQWt6A&s" />Chennai</div></Link>
          <Link to="/Category/location/Delhi"> <div className="location"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwPAZR24EKN-Iw5UEhSrYA5SBGjAWOI_GnQ&s" />Delhi</div></Link>
          <Link to="/Category/location/Pune">  <div className="location"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3633CdjKoG_CsHSelnk89dTZcIzdyCp9FPA&s" />Pune</div></Link>
          <Link to="/Category/location/Mumbai">  <div className="location"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlWjPvVHK3gtueYcNAEAMFChF6MBuH40UTQ&s" />Mumbai</div></Link>
          <Link to="/Category/location/Kolkata">   <div className="location"><img src="https://things2.do/blogs/wp-content/uploads/2022/11/Kolkata-Cover.jpg" />Kolkata</div></Link>
          <Link to="/Category/location/Gurgaon">   <div className="location"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP-94WgK32Xdf_ABCrsWej6buWa9HIdiPEw&s" />Gurgaon</div></Link>

        </div>

        <div className="sort2 d-flex flex-row flex-wrap gap-3 ">
          <Link to="/Category/graduation/BTECH">   <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7S3G3vHmtFCLiQKWDS6I_hq7t-XomsQSK6w&s" />B.Tech/M.Tech</div></Link>
          <Link to="/Category/graduation/BCA">   <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoF1gTuZ8oyzldN1V3MMjtUDwns186PpkTXg&s" />BCA/MCA</div></Link>
          <Link to="/Category/graduation/BSC">   <div className="qualification"><img src="https://static.wixstatic.com/media/7796f9_76927f78cff94c1bb057d6ea6dd2875d~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7796f9_76927f78cff94c1bb057d6ea6dd2875d~mv2.jpg" />BSC/MSC</div></Link>
          <Link to="/Category/graduation/MBA">  <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQuAlFe6qnbTmieorjkp36n7UEQ9eZT3rNw&s" />MBA/PGDM</div></Link>
          <Link to="/Category/graduation/BCOM">  <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjE27bHMmryis49yQHFCCJfzv5_ypl_EdomA&s" />BCOM/MCOM</div></Link>
          <Link to="/Category/graduation/Diploma">  <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i4VdmTnT4asSR4ouoiDdQauiweIGeaJLyQ&s" />Diploma</div></Link>
          <Link to="/Category/graduation/SSC">  <div className="qualification"><img src="https://www.clickindia.com/images/2019/04/16/29/161243168_15863997231_large.jpg" />10th/12th</div></Link>
          <Link to="/Category/graduation/Any Degree">  <div className="qualification"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1wvCdUyNUKvlx4dcu8uG6eNvqnSnF05RIA&s" />Any Degree</div></Link>
        </div>
      </div>
    </>
  );
}
export default Sorting;