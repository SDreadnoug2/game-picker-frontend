import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { useContext, useEffect, useState } from "react";
import "./Picker.css"
function Picker() {
    const images = [
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001864.600x338.jpg?t=1727742736",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/header.jpg?t=1727742736",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001872.600x338.jpg?t=1727742736",
    ]

    const [library, setLibrary] = useState(null);
    let counter = 0;
    const handleLibraryClick = (lib) => {
        setLibrary(lib);
        counter > 0 ? counter++ : null;
    }
    //you could have an algorithm that would allow people to specify what kind of game they'd want,
    // but then you'd have to check if you can request that sort of info via the API.

        return(
            library === "personal" ? (
                <>
                    <button onClick={() => handleLibraryClick("steam")} type="button" className={library === "personal" ? "picker__button picker__button-selected" : "picker__button"}>Your Library</button>
                    <div className='picker slide_in'>
                        <h3 className="picker__title">Let's see what you'll play!</h3>
                        <h2 className="picker__title">You should try...</h2>
                        <ImageCarousel images={images}/>
                        <h3 className="picker__game-title">Half Life 3</h3>
                        <h3 className="picker__game-price">$24.99</h3>
                        <p className="picker__game-description">Half life Description</p>
                    </div>
                </>
                
            ): library === "steam" ? (
                <>
                    <button onClick={() => handleLibraryClick("personal")} type="button" className={library === "steam" ? "picker__button picker__button-selected" : "picker__button"}>Steam Store</button>
                    <div className='picker slide_in'>
                    <h3 className="picker__title">Let's see what you'll play!</h3>
                    <h2 className="picker__title">You should try...</h2>
                    <ImageCarousel images={images}/>
                    <h3 className="picker__game-title">Half Life 3</h3>
                    <h3 className="picker__game-price">$24.99</h3>
                    <p className="picker__game-description">Half life Description</p>
                    </div>
                </>
            ) : (
            <div className="picker__buttons slide_in">
                <button onClick={() => handleLibraryClick("personal")} type="button" className={library === "personal" ? "picker__button picker__button-selected" : "picker__button"}>Your Library</button>
                <button onClick={() => handleLibraryClick("steam")} type="button" className={library === "steam" ? "picker__button picker__button-selected" : "picker__button"}>Steam Store</button>
            </div>) 
        )


}

export default Picker;