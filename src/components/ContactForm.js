import React, { Component } from "react";
import ContactStyle from './ContactStyle.css'

class ContactForm extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      email:"",
     company:"",
      subject:"",
      message:"",
      nameError:"",
      emailError:"",
      companyError:"",
      subjectError:"",
      messageError:"",
    }
  }

  handleChange = event =>{
    this.setState({
      name: event.target.value
  
    });
  }
  handleemailChange = event =>{
    this.setState({
      email: event.target.value  
    });
  }
  handlecompanyChange = event =>{
    this.setState({
      company: event.target.value  
    });
  }
 
  handlesubjectChange = event =>{
    this.setState({
      subject: event.target.value
  
    });
  }
  handlemessageChange = event =>{
    this.setState({
      message: event.target.value
  
    });
  }
  validate=()=>{
    let nameError="";
    let emailError="";
    let companyError="";
    let subjectError="";
    let messageError="";

    if(this.state.name===''){
      nameError='Please Enter name'
    }
    if(nameError){
      this.setState({nameError});
      return false;
    }
    
    if(this.state.email.indexOf('@')===-1){
      emailError='Please enter invalid Email id';
    }
    if(emailError){
      this.setState({emailError});
      return false;
    }
    if(this.state.company===''){
      companyError='Please Enter Company Name'
    }
    if(companyError){
      this.setState({companyError});
      return false;
    }
    if(this.state.subject===''){
      subjectError='Please Enter subject'
    }
    if(subjectError){
      this.setState({subjectError});
      return false;
    }
    if(this.state.message===''){
      messageError='Please Enter message'
    }
    if(messageError){
      this.setState({messageError});
      return false;
    }
    return true;
  };
  handleSubmit=event=>{
    event.preventDefault();
    const isValid= this.validate();
    //console.log(this.state);
  };

    render(){
        return(
            <div className="formwrap">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
                <div className="errorMessage">{this.state.nameError}</div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your email address" value={this.state.email} onChange={this.handleemailChange} />
                <div className="errorMessage">{this.state.emailError}</div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Company" value={this.state.company} onChange={this.handlecompanyChange} />
                <div className="errorMessage">{this.state.companyError}</div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Subject" value={this.state.subject} onChange={this.handlesubjectChange} />
                  <div className="errorMessage">{this.state.subjectError}</div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message  " value={this.state.message} onChange={this.handlemessageChange}></textarea>
                  <div className="errorMessage">{this.state.messageError}</div>
                </div>
                <div className="form-group text-center">
                <button type="submit" className="btn-action">Submit</button>  
                </div>                                  
                
              </form>
            </div>
        );
    }

}

export default ContactForm