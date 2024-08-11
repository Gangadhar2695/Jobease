import "./Need.css"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"


const Need = () => {


  return (
    <>
      <div className="container need ">
        <h3 className="text-dark fw-bold text-start"> Insights</h3>

        <div className=" gap-4 align-items-center need-images">
          <OwlCarousel className='owl-theme' autoplay={true} loop={true} items={4} margin={10} responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 4,
            }
          }} >

            <div className="item need1">
              <img width="300px" height="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y6I2P0QGCwz44-Bc9fES_X5yYTnrAFUvVw&s" alt="need" />
              <h4>All Jobs</h4>
            </div>

            <div className="item need2">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240220162412/Common-Interview-Questions-&-Answers-For-2024.webp" alt="need" />
              <h4>Interviews</h4>
            </div>

            <div className="item need3">
              <img src="https://miro.medium.com/v2/resize:fit:880/1*KoTW7xcLh0plosrJJjmx7A.png" alt="need" />
              <h4>Courses</h4>
            </div>

            <div className="item need4">
              <img src="https://images.ctfassets.net/wp1lcwdav1p1/5wmEECloDc1OMWAMEamsQ8/edb1da18b9ce2e661d227312c7d61805/GettyImages-1203940958.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive" alt="need" />
              <h4>Resumes</h4>
            </div>

          </OwlCarousel>

        </div>

      </div>
    </>

  )
}

export default Need;