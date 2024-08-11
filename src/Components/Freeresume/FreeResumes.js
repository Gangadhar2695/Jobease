import "../Freeresume/FreeResume.css"
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react";

const FreeResumes = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="freeresume d-flex flex-column gap-4 justify-content-center ">

        {/* <div>
          <img className="resume-image" src="https://media.licdn.com/dms/image/D5612AQE85yU87ekWiQ/article-cover_image-shrink_720_1280/0/1714380971331?e=2147483647&v=beta&t=9dE63J9_Ag6jO1S1HhBvsvHbzN69SPtSdj06pSN0CP0"  height="300px" />
        </div> */}

        <h4 className=" fw-bold text-uppercase text-center mt-4 resume-header">Free ATS  Resume Templates for Freshers</h4>

        <div className=" m-5 d-flex flex-row gap-5 flex-wrap">


          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freee.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume1.pdf" download="freeresume1.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow}><i className="fa-solid fa-eye"></i></div>
            </div>

            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold"> Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume1.pdf"  width="100%" height="500px" title="Preview"></iframe>
              </Modal.Body>
            </Modal>

          </div>



          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/free2.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume2.pdf" download="freeresume2.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume2.pdf"  width="100%" height="500px" title="Previews"></iframe>
              </Modal.Body>
            </Modal>
          </div>


          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/free3.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume3.pdf" download="freeresume3.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view"  onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume3.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>


          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume4.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume4.pdf" download="freeresume4.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow} ><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume4.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>


          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume5.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume5.pdf" download="freeresume5.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume5.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>


          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume6.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume6.pdf" download="freeresume6.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow} ><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume6.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>

   

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume7.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume7.pdf" download="freeresume7.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view" onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume7.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>



          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume8.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume8.pdf" download="freeresume8.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view"  onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume8.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>



          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresume9.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresume9.pdf" download="freeresume9.pdf" ><i class="fa-solid fa-download"></i></a></div>
              <div className="view"  onClick={handleShow}><i class="fa-solid fa-eye"></i></div>
            </div>
            <Modal className="mt-5" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="text-center fw-bold">Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe src="./assets/freeresume9.pdf"  width="100%" height="500px" title="Resume Preview"></iframe>
              </Modal.Body>
            </Modal>
          </div>

        </div>

        <h4 className=" fw-bold text-uppercase text-center resume-header ">Free Resume Templates for Professionals</h4>

        <div className=" m-5 d-flex flex-row gap-5 flex-wrap">

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freepro1.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./assets/freeresumepro1.pdf" download="freeresumepro1.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view" ><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro2.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro2.jpg" download="freeresumepro2.jpg"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro3.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro3.pdf" download="freeresumepro3.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro4.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro4.pdf" download="freeresumepro4.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro5.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro5.pdf" download="freeresumepro5.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro6.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro6.pdf" download="freeresumepro6.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/res.png" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/res.pdf" download="freeresumepro4.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro5.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro5.pdf" download="freeresumepro5.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>

          <div className="free bg-light">
            <img className="col-4-lg bg-white " src="./images/freeresumepro6.jpg" alt="card-image" height="350px" width="300px" />
            <div className="d-flex flex-row justify-content-around ">
              <div className="download"><a href="./images/freeresumepro6.pdf" download="freeresumepro6.pdf"><i class="fa-solid fa-download"></i></a></div>
              <div className="view"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>


        </div>


      </div>
    </>
  )
}

export default FreeResumes;