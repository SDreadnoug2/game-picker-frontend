function Picker() {

    //you could have an algorithm that would allow people to specify what kind of game they'd want,
    // but then you'd have to check if you can request that sort of info via the API.

    return (
        <div className="picker">
            <h3 className="picker__title">Let's see what you'll play!</h3>
            <h2 className="picker__title">You should try...</h2>
            <h3 className="picker__game-title">Half Life 3</h3>
            <h3 className="picker__game-price">$24.99</h3>
            <p className="picker__game-description">Half life Description</p>

        </div>
    )
}

export default Picker;