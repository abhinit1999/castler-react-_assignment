import React from "react";
import {NavLink, Routes,Route} from "react-router-dom";
import "./style.css";


function Displaydata({ data }) {
  return (
    <>

<Routes>
  <Route path="/"></Route>
  <Route path="/img" element={
    <img 
    src={data.data.avatar}
     alt="Img" />
    
  }></Route>
  <Route path="/name" element={
   <p><strong>Name: </strong>
   {data.data.first_name}{" "}{data.data.last_name}
 </p>
    
  }></Route>
  <Route path="/email" element={
    <span><strong>Email:</strong>
    {data.data.email}
    </span>
    
  }></Route>
  <Route path="/description" element={
   <p><strong>Description :</strong>
   <span className="fdata"> 
   {data.support.text}
   </span>
      </p>
    
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
      <div className="img" key={data.data.id}>
        <img 
        src={data.data.avatar}
         alt="Img" />
      </div>
      <div className="name">
        <p><strong>Name: </strong>
          {data.data.first_name}{" "}{data.data.last_name}
        </p>
        <span><strong>Email:</strong>
           {data.data.email}
           </span>
        <p><strong>Description :</strong>
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
