import './about.css'

import React from 'react'
import about from '../images/my-images/About.jpg'
import udemy from '../images/my-images/udemy object.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <div className='image bg'></div>
            <div className='image'>
                <img  className='my-img' src={about} alt='image'/>
            </div>
        </div>
        <div className='about-right'>
            <h1>About Me</h1>
            <p> lipsum as it is sometimes known, 
                is dummy text used in laying out print,
                 graphic or web designs. The passage is 
                attributed to an unknown Nemo enim valuptatem quia valuptas sit valuptatem
                quia valuptas si Aut voluptatum sequi et fugit galisum id eaque 
                impedit eos fuga beatae sed accusamus dolore vel consectetur 
                ratione. Vel assumenda quia vel doloribus expedita est culpa ratione 
                qui enim reiciendis ut velit harum et consequatur magni cum beatae doloremque.</p>
        </div>
    </div>
  );
}

export default About