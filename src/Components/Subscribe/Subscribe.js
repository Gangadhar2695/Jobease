import "./Subscribe.css";
import { useState } from "react";

const Subscribe = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  // console.log(`name ${name} email ${email}`)

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/Subscribe', {
        method: 'post',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const results = await response.json();
      // console.log('results',results);
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <>
      <div className="subscribe d-flex flex-column justify-content-center p-5 rounded-4  ">

        <h4 className="text-white fw-bold my-3">Subscribe to JOBEase</h4>
        <div className="form" onSubmit={handleSubscribe}>
          <form className="form " >
            <div className="input-group d-flex flex-column mb-3">
              <label htmlFor="email1" className="ms-5 text-white fw-bold ">Email</label>
              <input type="password" className="form-control w-75 m-auto" id="email1" placeholder="Enter your email " onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            <div className="input-group d-flex flex-column">
              <label htmlFor="name1" className="ms-5 text-white fw-bold">Name</label>
              <input type="password" className="form-control w-75 m-auto" id="name1" placeholder="Enter your name " onChange={(e)=>setName(e.target.value)} />
            </div>
            <button type="submit" className="subscribe-submit">SUBMIT</button>
          </form>
        </div>


      </div>
    </>
  )
}

export default Subscribe;