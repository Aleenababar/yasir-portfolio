import React from "react";
// import { NavLink } from "react-router-dom";
import Card from "../Component/Card";
import Pdata from "../Component/Pdata";

const Projects= () => {
  return (
    <div className="  project-section container-fluid">
      <div className="container">
        <h1 className="project-heading">
          Our recent <span className="purple">Projects</span>
        </h1>
        <p>
          We've delivered <span className="purple"> 450+</span> projects, but
          here are a few projects we worked on recently.
        </p>
        <div className="container-fluid  mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  Pdata.map((val,ind)=>{
                    return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    
                    
                    />
                  })




                }
                    
                  
     
 

 
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

        
      
    
  );
};

export default Projects;
