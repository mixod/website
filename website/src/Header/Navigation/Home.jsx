/* eslint-disable react/prop-types */

import About from "./About";



function Home({setContent}) {
  
  return (
    <>
      <div className="image">
      <div className="mainhome">
      <div className="Heading">Subha Bihani Digital Media Pvt. Ltd</div>
      <div className="sub-heading"><h1>Empower Your Business<br/> Traffic at The Top</h1></div>
      <div>
        <p  className="Paragraph">
          Holisticly procrastinate mission-critical convergence with
          <br /> reliable customer service. Assertively underwhelm idea-
          <br />
          sharing for impactful solutions.
        </p>
        </div>
        <div>
          <button onClick={()=>setContent("Home")} style={{color:"white" , backgroundColor:"#00a0e8" , padding:"1%"}}>Get Start Now</button>
        </div>
      </div>
      </div>
      <About/>
    </>
  );
}

export default Home;
