import './footer.css'

import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-media'>
        <a href='https://www.facebook.com/adaa.king.3/'><FaFacebook className='media'/></a>
                <a href='https://github.com/Adaaking'><BsGithub className='media'/></a>
                <a href='mailto:addisumotora@gmail.com'><SiGmail className='media'/></a>
                <a href='https://twitter.com/addisu_motora'><AiFillTwitterCircle className='media'/></a>
                <a href='https://www.linkedin.com/in/addisu-motora-890644208/'><BsLinkedin className='media'/></a>
        </div>
        <div className='footer-txt'>
            <p>@Alright-reserved</p>
            <p>2022</p>
        </div>
    </div>
  )
}

export default Footer