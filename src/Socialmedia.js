

import { Link } from "react-router-dom"


const Socialmedia = () => {
  return (

    <div className="bg-light  d-flex flex-column flex-wrap gap-2 py-1  justify-content-center daily-updates">
      <div className="  text-primary fw-bold fs-5">JOIN  US TO GET DAILY UPDATES</div>
      <div className=" d-flex flex-row flex-wrap justify-content-center gap-4 ms-2 py-3">
        <Link to="https://wa.me/7989992024"><button className="btn-77 border border-white border-2 btn bg-success text-white fw-bold"><span className="me-1"><i class="fa-brands fa-whatsapp fa-lg"></i></span>CLICK HERE 2 JOIN WhatsApp </button></Link>
        <Link to="/jobease/telegram"> <button className="btn-77 border border-white border-2 btn bg-primary text-white fw-bold"><span className="me-1"><i class="fa-brands fa-telegram fa-lg"></i></span>CLICK HERE 2 JOIN  Telegram </button></Link>
        <Link to="/jobease/instagram"> <button className="btn-77 border border-white border-2 btn bg-secondary text-white fw-bold"><span className="me-1"><i class="fa-brands fa-instagram fa-lg"></i></span>CLICK HERE 2 JOIN  Instagram </button></Link>
        {/* <Link to="/jobease/x"> <button className="btn-77 border border-white border-2 btn bg-danger text-white fw-bold"><span className="me-1"><i class="fa-brands fa-twitter fa-lg"></i></span>CLICK HERE 2 JOIN  twitter X </button></Link> */}
      </div>
    </div>
  )
}

export default Socialmedia