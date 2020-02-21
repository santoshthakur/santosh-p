import React, { Component } from 'react'

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
            <h2 className="main-title">Portfolio</h2>
            <p>See my works below. Unless explicitly stated otherwise</p>
            <div className="timeline portfolio-timeline">
                <ul>
                    <li className="timeline_element timeline_element--now project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">Now</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div>
                            <strong>Mobikasa Pvt. Ltd</strong>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element timeline_element--now project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">May 2012 - July 2019</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div>
                            <strong>IndiaMART InterMesh Ltd</strong>
                            <p> Web development using JavaScript, JQuery, CSS3 and HTML5.
                                Responsible for User Interface and User Experience.
                            </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element timeline_element--now project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">August 2011 - May 2012</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div>
                           <strong>Webkeon Technologies </strong>
                            <p> Web development using JavaScript, JQuery, CSS3 and HTML5.
                                Responsible for User Interface and User Experience.
                            </p>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            </React.Fragment>
           
        )
    }
}
export default Portfolio;