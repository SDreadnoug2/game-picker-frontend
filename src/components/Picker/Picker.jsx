
import { useContext, useEffect, useState } from "react";
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'

import "./Picker.css"
function Picker({navigate}) {

    const images = [
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001864.600x338.jpg?t=1727742736",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/header.jpg?t=1727742736",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/0000001872.600x338.jpg?t=1727742736",
    ]

    const [library, setLibrary] = useState(null);
    const handleLibraryClick = (lib) => {
        setLibrary(lib);
        navigate(lib);

    }
    //you could have an algorithm that would allow people to specify what kind of game they'd want,
    // but then you'd have to check if you can request that sort of info via the API.

        return(
                <div className="picker__buttons">
            <button onClick={() => handleLibraryClick("userlibrary")} type="button" className={library === "library" ? "picker__button picker__button-selected" : "picker__button"}>Your Library</button>
            <button onClick={() => handleLibraryClick("steamstore")} type="button" className={library === "steamstore" ? "picker__button picker__button-selected" : "picker__button"}>Steam Store</button>
                </div>
        );

}


export default Picker;