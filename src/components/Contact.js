import React, {Component} from 'react'
import ContactForm from './ContactForm'
class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <h2 className="main-title">Contact</h2>
                <p>I am available for hire and open to any ideas of cooperation.</p>
                <div className="vcard">
                    <dl className="dl dl-vertical">
                        <dt>E-mail:</dt>
                        <dd>
                        <a href="mailto:santoshk87@gmail.com"> santoshk87@gmail.com</a>
                        </dd>
                        <dt>LinkedIn:</dt>
                        <dd>
                        <a href="https://www.linkedin.com/in/santosh-thakur-24b21157"> santoshk87@gmail.com</a>
                        </dd>
                    </dl>

                </div>
                <ContactForm />

            </React.Fragment>
        )
    }
}

export default Contact;