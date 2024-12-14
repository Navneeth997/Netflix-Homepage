import React from 'react'
import "./Banner.css"


export default function Banner() {
  return (
    <div className='banner'>
        <div className='content'>

            <h1 className='title'>MONEY HEIST</h1>

            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan</h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}
