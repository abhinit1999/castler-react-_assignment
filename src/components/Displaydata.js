import React from 'react'

function Displaydata ({data}) {
  return (

    <div className="main">
        <div className="imgcls">
        <img src={data.data.avatar} alt='Img'/> 

        </div>
        <div className="name">
        <h3>{data.data.first_name}</h3>
        <span>{data.data.email}</span>
        </div>
        <div className="fllowers">
        <span>Description : </span><span className='fdata'> {data.support.text}</span>
        </div>
       

    </div>

  )
}

export default Displaydata;