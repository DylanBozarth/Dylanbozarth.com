import React, {useState} from 'react'
import "./games.css"
export const JumpGame = () => {
    let player = document.getElementById('player')
    function Jump() {
        player.classlist.add('powerUp')
        
    }
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
         console.log(player)
        }
      })
    return (
        <div className="masterDiv">
        <div className='jumpgameBox'>
Jumping jack
<div id="player"></div>
<div className="enemy"></div>
        </div></div>
    )
}