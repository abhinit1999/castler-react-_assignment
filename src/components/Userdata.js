import React,{ useState } from 'react';
// import '../components/style.css';
import Displaydata from './Displaydata';

const Userdata = () => {

    const [userName, setUserName] = useState();
    const [adata, setData] = useState({});
  
    const onChangeHandler = (e) => {
        if(e.target.value<13 )
            setUserName(e.target.value);
        else
            window.alert("value can't be greater than 12")
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      fetch(`https://reqres.in/api/users/${userName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            setData(data);
            // console.log(data.data.email);
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
          <h1>Search Github User By One Click</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="search user...."
          value={userName}
          
            
        
          onChange={onChangeHandler} />
          <button className="btn">Search</button>
        </form>
        
        
        {/* <Displaydata data={adata}></Displaydata> */}

      </div>

      
    </>

  )
}

export default Userdata;