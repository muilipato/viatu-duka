import React from 'react';
import img from '../assets/fashion-shoes-sneakers.jpg'
import './styles/BelowHeader.css'
import {Router, Link} from "react";


export default function BelowHeader(){

  function handleClick(){

  }
    return (
        <div className='slider'>
          <div className='img-container'>
          <img src = {img}></img>
          </div>
          <div className='intro'>
            <h1>
              Shop on Viatu Duka
            </h1>
            <p>Choose your shoes with us. Click below for more.
              Trusted by 100m+ users.
            </p>
            <button className='intro-button'>Read More</button>

          </div>

        </div>
      )

}
