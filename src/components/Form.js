import "./FormStyles.css";
import React from 'react';
// import emailjs from 'emailjs-com';


const Form = () => {
  // function sendEmail(e)
  // {
  //     e.preventDefault();
  //     emailjs.sendForm(
  //       "service_6earas8",
  //       "template_vbvk557",
  //       e.target,
  //       "dUS9VAD1rr8NLCG7s"
  //     ).then(res=>{
  //       console.log(res);
  //     }).catch(err=>console.log(err));
  // }
  return (
    <div className="form">
          <form action="mailto:madhury571@gmail.com" method="post" enctype="text/plain">
            <label>Your Name</label>
            <input type="text" name="name" autoComplete="off" placeholder="Enter your name" />
            <label>Email</label>
            <input type="email" name="email" autoComplete="off" placeholder="Enter your email" />
            <label>Message</label>
            <textarea name="message" rows="6" autoComplete="off" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
