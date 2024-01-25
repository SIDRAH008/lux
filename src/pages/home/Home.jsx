import React from "react"
import Awards from "./awards/Awards"
//import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
//import Location from "./location/Location"
/////import Price from "./price/Price"
////import Recent from "./recent/Recent"
//import Team from "./team/Team"
//import Footer from "../../component/footer"
import step2 from "../../component/Images/step-2.jfif";
//import step3 from "../../component/Images/step-3.jfif";
//import step4 from "../../component/Images/step-4.jpg";
//import step1 from "../../component/Images/step1"
const Home = () => {
  return (
    <>
      <Hero />
    
      <section className="speciality" id="speciality">
        <h1 className="heading">
          Our <span>speciality</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img
              className="image"
              src="step-1"
              alt=""
            />
            <div className="content">
              <h3>Best places</h3>
              <p>
                
              </p>
            </div>
          </div>
          <div className="box">
           

            <div className="content">
              <img src="step-1.jpg" alt="" />
              <h3> For Rent</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
           
            <div className="content">
              <img src="step-3.jfif" alt="" />
              <h3>Best place</h3>
              <p>
                
              </p>
            </div>
          </div>
          <div className="box">
            
            <div className="content">
              <img src="step-3.jfif" alt="" />
              <h3>Live happy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="step-4.jpg" alt="" />
              <h3>For Sale</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <h3>Dubai best places</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <section className="steps">
          <div className="box">
            <img src={step2} alt="" />
            <h3>choose your favorite palce</h3>
          </div>
          <div className="box">
            <img src={step2} alt="" />
            <h3>Best home for You</h3>
          </div>
          <div className="box">
            <img src={step2} alt="" />
            <h3>LIVE HAPPY</h3>
          </div>
        </section>
        </div>
      <Awards />
      
      </>
    
  )
}

export default Home
