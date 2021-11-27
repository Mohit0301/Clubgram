import React from 'react'
import { Carousel } from '../Carousel/Carousel';
import { About } from './About';
import { Features } from './Features';
import './Home.css'

export const Home = ({ user, updateUser }) => {
  
  return (
    <div>         
                  <Carousel ></Carousel>
                  <br/>
                  
                 
                  {/* About */}
                  <div className="container">
                  <div className="About">
                  <About></About>
                  </div>
                  </div>

                  <br/>

                  {/* How it works! */}
                  <div className="container">
                  <Features></Features>
                  </div>
                  <br/>
                </div>
                
 
  )
}
