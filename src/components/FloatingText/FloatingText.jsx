import { useState, useEffect } from 'react'
import './FloatingText.css'

function floatingText() {
    const [games, setGames] = useState([]);

    setGames([{name: 'Battlefield', link: "#"}, {name: 'Halo 3', link: '#'}, {name: 'Fallout 4', link: '#'}]);


    const spawnGame = () => {
        const game = games[Math.floor(Math.random() * games.length)]
        const gameRender = {
            title: game.name,
            link: game.link,
            speed: Math.random() * 4,
            size: Math.random() * 3,
            top: Math.random() * window.innerHeight,
        }
    }

    useEffect(() => {
        const spawnGames = setInterval(() => {
            spawnGame()
        },(1000))
    })
    // In reality you'd want to make a GET request to steam, then have it return like 
    // 40-50 game titles + their link, and that's it.
    //You want to get a series of links for games and their steam page.
    // Then, take those links, and convert them into objects, each with
    // random speeds, heights, and sizes, so that they can be put
    // into a list in React using key value pairs.
    // remember to clean up after reaching other end of the page.
    // To spawn something at an interval, React has a setInterval, in which
    // you can pass a callback function to execute code every x ms.
    // Once animation ends, remove.
    //You'll also need to assign each one a value of "link" from it's original object,
    // So hopefully you can request that information. 

  return (
    <div className="floatingText">

    </div>
  )
}

export default floatingText