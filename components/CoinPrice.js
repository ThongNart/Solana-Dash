function CoinPrice(props) {
    const {coinTicker, coinLogo, price} = props

    return(
        <div className="flex flex-row space-x-1">
            <img className="rounded-full w-9 h-9 mt-1.5" src={`./${coinLogo}`} alt="sol coin logo" />
            <h1 className="bg-zinc-600 rounded-lg p-1">{coinTicker}</h1>
            <h1 className="bg-blue-700 rounded-lg p-1">${price.toFixed(3)} USD</h1>
        </div>
    )
}

export default CoinPrice;