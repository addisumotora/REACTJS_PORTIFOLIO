import './skills.css'

import React, { useState } from 'react'
import data from './data';


const Skills = () => {
    const [skills,SetSkills] = useState(data);

  return (
    <div className='skills'>
        <div className='skillIntro'>
            <h1>My skills</h1>
            <p>Aut voluptatum sequi et fugit galisum id eaque 
                impedit eos fuga beatae sed accusamus dolore vel consectetur 
                ratione. Vel assumenda quia vel doloribus expedita est culpa ratione 
                qui enim reiciendis ut velit harum et consequatur magni cum beatae doloremque.</p>
        </div>
   
       
        <div className='cards'>
        {skills.map((skill,index) =>{
          const {image,title,} = skill;
          return (
            <div className='card' key = {index}>   
            <img src ={image} alt='java'/>
            <h3>{title}</h3>
            <a href = " #href">click here</a>
            </div>
        
    )})}
    </div>
    </div>
  )
}

export default Skills