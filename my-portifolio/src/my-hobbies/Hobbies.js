import './hobbies.css'

import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import hoby from './hoby'


const Hobbies = () => {
    const [index,setIndex] = useState(0);
    const { id,title,desc,image } = hoby[index];

    const randomNumber = () =>{
        let random = Math.floor(Math.random() * 6)
        if (random === index){
           random = index +1
        }
        return setIndex(checkIndex(random))
    }
    const checkIndex = (number) =>{
        if(number > hoby.length-1){
            return 0;
        }
        if(number < 0){
            return hoby.length - 1;

        }
     return number
    }
    const handleRight = () =>{
        let right = index +1;
        return setIndex(checkIndex(right))
    }
    const handleLeft = () =>{
        let left = index -1;
        return setIndex(checkIndex(left))
    }

    return(
        <div className="hobbies">
            <div className='hobbies-txt'>
                <h2>My hobbies</h2>
                <p>In publishing and graphic design, 
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual 
                    form of a document or a typeface without 
                    relying on meaningful content. Lorem ipsum may 
                    be used as a placeholder 
                    before the final copy is available</p>
            </div>
            <div className='cards-hobis'>
                <FaChevronLeft  className='fa' onClick={handleLeft}/>
                   <div className='card-hobis-text'>
                       <h4>{ title }</h4>
                       <p>{desc}</p>
                   </div>
                   <div className='card-hobis'>
                       <img className ='hobis-img' src={image} alt = 'title' />
                   </div>
                <FaChevronRight className='fa' onClick={handleRight}/>
            </div>
            <hr />
            <div className='butn'>
                
                <button onClick={randomNumber}>random hobbies</button>
            </div>
        </div>
    );
}
export default Hobbies