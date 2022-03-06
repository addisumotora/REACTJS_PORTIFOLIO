import './home.css'

import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import me from '../images/my-images/renamed.png'


function Home() {
  return (
    <div className='container'>
        <div className='home-left'>
            <div className='home-media'>
                <a href='https://www.facebook.com/adaa.king.3/'><FaFacebook className='media'/></a>
                <a href='https://github.com/Adaaking'><BsGithub className='media'/></a>
                <a href='mailto:addisumotora@gmail.com'><SiGmail className='media'/></a>
                <a href='https://twitter.com/addisu_motora'><AiFillTwitterCircle className='media'/></a>
                <a href='https://www.linkedin.com/in/addisu-motora-890644208/'><BsLinkedin className='media'/></a>
            </div>
            <div className='home-intro'>
                <h1 className='hello'>Hello I'm</h1>
                <h1 className='name' data-text="Addisu Motora" id='name'>Addisu Motora</h1>
                 <div className='wrapper'>
                     <div className='static-txt'>I'm a</div>
                         <ul className='dynamic-txts'>
                             <li><span>Designer</span></li>
                             <li><span>Developer</span></li>
                             <li><span>Freelancer</span></li>
                        </ul>
                 </div>
                <p className='desc'>lorum epsom dolor sit amet, consetetur sadipscing elitr sed diam 
                    nonumy eirmod tempor invidunt et dolore magna aliquyam
                </p>
                <button className='hireMe'>Hire me</button>
            </div>
        </div>
        <div className='home-right'>
            <div className='div'></div>
            <img src={me} alt='me' className='home-image'/>
        </div>
    </div>
  )
}

export default Home