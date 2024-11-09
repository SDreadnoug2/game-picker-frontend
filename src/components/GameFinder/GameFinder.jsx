import "./GameFinder.css"
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { useContext } from "react";
function GameFinder ({locale}) {
        const images = [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001864.600x338.jpg?t=1727742736",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/header.jpg?t=1727742736",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001872.600x338.jpg?t=1727742736",
        ]
    
    return (
        <div className='GamePicker'>
            <h3 className="GamePicker__title">Let's see what you'll play!</h3>
            <h2 className="GamePicker__title">You should try...</h2>
            <ImageCarousel images={images}/>
            <h3 className="GamePicker__title">Half Life 3</h3>
            <h3 className="GamePicker__price">$24.99</h3>
            <p className="GamePicker__description">Half life Description</p>
        </div>
    )
}

export default GameFinder;