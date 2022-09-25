import React, { useState,useRef } from "react";
import './style.css';
import Displaydata from "./Displaydata";
import { useEffect } from "react";

const Userdata = () => {
  const [userName, setUserName] = useState();
  const [adata, setData] = useState({});

  const inputElement = useRef();

// function isNumber(str)
// {
//   if(str.trim()==='')
//   return false;
//   return !isNaN(str);
// }
  const onChangeHandler = (e) => {
    if (e.target.value < 13 && !isNaN(e.target.value) ) setUserName(e.target.value);
    else window.alert("Pls Enter number only and less than 12");
 
 
 


    
  };

  useEffect(()=>
  {
    inputElement.current.focus();

  },[])
  const onSubmitHandler = (e) => {
    e.preventDefault();
    inputElement.current.focus();
    fetch(`https://reqres.in/api/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setData(data);
          // console.log(data);
          // window.alert(`${data.data.email}`)
          // console.log(data.data.first_name);
          // console.log(data.data.last_name);
          // {(userName>12) ? alert("value cant be greater than 12"):}
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Get User Data</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input
          ref={inputElement} 
          className="ipt"
            type="text"
            placeholder="Enter User ID...."
            value={userName}
            onChange={onChangeHandler}
          />
          <button className="btn">Search</button>
        </form>

        <Displaydata data={adata} ></Displaydata>
      </div>


      
      

      {/* <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={adata.data.avatar}
              class="img-fluid rounded-start"
              alt="Img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{adata.data.first_name}</h5>
              <h5 className="card-title">{adata.data.email}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Userdata;
