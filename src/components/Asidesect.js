import React from 'react';
import {
    NavLink
  } from "react-router-dom";

import Pics from './Pics'
import Social from './Social'

const Asidesect =()=>{
    return(
    <aside className="site-sidebar">
        <div className="site-sidebar-inner">
            <Pics />
            <nav>
            <div className="main-navigation">
                <ul>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact Me</NavLink></li>


                </ul>

            </div>
            <div className="block-content">
                <Social />
            </div>
            </nav>
        </div>
    </aside>
    );
}

export default Asidesect;