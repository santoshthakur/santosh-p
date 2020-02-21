import React,{Component} from 'react'

class About extends Component{
    render(){
        const mttop= {
            marginTop:"20px",
        }
        return(
            <React.Fragment>
            <h1 className="main-title">About Us</h1>
            <div>My career goal is to excel & contribute towards organization in a competent environment loaded with latest technology. I would like to work for an organization that would harness my potential effectively & boost my learning curve by providing ample growth opportunities.</div>
            <div style={mttop}>I am self-motivated and able to work both independently and as collaborative team member.7 years of experience in developing high-end user interfaces with in-depth knowledge of all facets required for making a site responsive and enhancing the user experience across all devices and browsers.Skilled in Web Designing, HTML5, CSS3,Bootstrap, SCSS, Javascript, JQuery, JSON,and Wordpress. 

</div>
            <h3>Skill</h3>
            <div>
            I have experience in <strong>JavaScript, HTML5, jQuery, Bootstrap, CSS3, Photoshop, Responsive Web Design, SCSS, React and WordPress</strong>  
            </div>
            </React.Fragment>

        )
    }
}

export default About;