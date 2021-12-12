import React from "react";
import hcbgImage from "./image2021.jpg";


function App() {
  const handleClickEvent=() => {
    
  }
  return (
      <> <div
      class="bg_image"
      style={{
        backgroundImage: `url(${hcbgImage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >

      <h1 style={{ textAlign: "center" }}>
        <b>Multilingual Recruitment Specialists</b>
      </h1>
    </div>
      <form>     
      <input type="text" placeholder="Keyword"/> 
      <input type="text" placeholder="Language"/> 
      <input type="text" placeholder="Location"/>
      <button onClick={handleClickEvent}>Search</button> 
  </form></>
  );
}



  


export default App;
