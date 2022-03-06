import './contact.css'

import emailjs from '@emailjs/browser';
import React,{ useRef, useState }from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { RiTwitterLine } from 'react-icons/ri'
import contact from '../images/my-images/contact-img-.jpg'


const Contact = () => {
const [isSubmit,setSubmit] = useState(false)

const Submitted = () =>{
    setTimeout(() =>{
        setSubmit(true)
    },2000)
}
    const formRef =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_69omdwk', 'template_qesn2ug', formRef.current, 'NFtahAYpZfi6NRCS0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='contact'>
        <div className='contact-img'>
            <img src={contact} alt='image'/>
        </div>
        <div className='contact-right'>
            <div className='div-h2'>
                <h2>Contact me</h2>
            </div>
            <form className='contact-form' ref ={formRef} onSubmit={sendEmail}>
                
                <input type='text' id= 'name' name= "user_name" placeholder='Name'/>
                <input type='email' id='email' name ="user_email" placeholder='E-mail'/>
                
                <textarea id='message' name="message" placeholder='Message'></textarea>
                <div className='btn-media'>
                <div className='button'>
                   <button className='btn' onClick={Submitted}>{isSubmit? 'Submitted': 'Submit'}</button>
                </div>
                <div className='media'>
                    <a href="https://www.facebook.com/adaa.king.3/"><FaFacebook className='medi'/></a>
                   <a href="https://www.instagram.com/sewhun___/"><BsInstagram className='medi'/></a>
                   <a href ="https://twitter.com/addisu_motora"><RiTwitterLine  className='medi'/> </a>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Contact