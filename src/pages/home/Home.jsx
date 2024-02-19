import React from "react";
import Awards from "./awards/Awards";
import Hero from "./hero/Hero";
import step2 from "../../component/Images/step-2.jfif";
import step3 from "../../component/Images/step-3.jfif";
//import "./Home.css"; // Import your custom CSS file for Home if needed
import image from  "./bground.jpg"
import DubaiRealEstate from "./location/Location";

const Home = () => {
  return (
    <>
    
      <Hero />
       

      <section className="speciality" id="speciality">
        <h1 className="heading">
          New  <span> Development</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="content">
           
              <h3>Best places</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              
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

              <h3>Best place</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            
            <div className="content">
            
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
            <img src={step3} alt="" />
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
          <div className="box">
            <img src={step3} alt="" />
            <h3>LIVE HAPPY</h3>
          </div>
        </section>
        </div>
        <DubaiRealEstate/>
      <Awards />
      
      </>
    
  )
}

export default Home
