import React from "react";
import {NavLink, Routes,Route} from "react-router-dom";
import "./style.css";


function Displaydata({ data }) {
  return (
    <>

<Routes>
  <Route path="/"></Route>
  <Route path="/img" element={
    <p>img</p>
    
  }></Route>
  <Route path="/name" element={
    <p>name</p>
    
  }></Route>
  <Route path="/email" element={
    <p>Email</p>
    
  }></Route>
  <Route path="/description" element={
    <p>Description</p>
    
  }></Route>
  <Route path="/name"></Route>
  <Route path="/email"></Route>
  <Route path="/description"></Route>
  
 
</Routes>
    <div className="main">
      <div className="menu">
        <NavLink to="/" className="nav_link">Home</NavLink>
        <NavLink to="/img" className="nav_link">Image</NavLink>
        <NavLink to="/name" className="nav_link">Name</NavLink>
        <NavLink to="/email" className="nav_link">Email</NavLink>
        <NavLink to="/description" className="nav_link">Description</NavLink>
      </div>
      <div className="img">
        <img 
        src={data.data.avatar}
         alt="Img" />
      </div>
      <div className="name">
        <h3>Name: 
          {data.data.first_name}
        </h3>
        <span>Email:
           {data.data.email}
           </span>
        <p>Description :
        <span className="fdata"> 
        {data.support.text}
        </span>
           </p>
      </div>
      {/* <div className="fllowers">
      </div> */}
    </div>

    </>
  );
}

export default Displaydata;
