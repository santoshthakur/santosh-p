import React from 'react';
import Profilepics from '../Profilepics.png'

const Pics= ()=>{
    return(
        <a href="#" className="block lnk text-center">
          <div className="ppimg">
          <img src={Profilepics} className="ppimg"  alt="" />

          </div>

            <h1>
                Santosh Thakur
                <span className="des block">Frontend Developer</span>  
            </h1>
        </a>
    )
}

export default Pics;