import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
export default function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>

      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Somting amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indugence unpleasing. Not thought all exercise blessing. Indulgen way everything boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='pepole'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div> 
        <div className='gpt3__header-image'>
        <img src={ai} />
      </div>
      
    </div>
  )
}
