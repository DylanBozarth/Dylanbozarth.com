import React, {useState, useEffect} from 'react'
import "./games.css"

export const JumpGame = () => {
    const [playerPosition, setPlayerPosition] = useState({
backgroundColor: 'green',
height: '50px',
width: '50px'
    })
    useEffect(() => {
document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
          test()
        }
      })
    }, [])
    function test() {
console.log('aaa')
    }
    return (
        <div className="masterDiv">
<div className="jumpgameBox">
    Try and survive lol

    <div style={playerPosition}></div>
</div>
        </div>
    )
}