import '../App.css'
export default function TrendingTile({ coin }) {
  return (
    <div class="cap_tile">
      <div class="cap">
        <div class="coin">
        <img className="crypto_image" src={coin.image} alt={coin.name} />
        <h3 class="currency_text">{coin.name}</h3>
        </div>
       
        <span>${coin.current_price}</span>
      </div>
      <div class="cap">
        <h3>MktCap ${coin.market_cap}</h3>
        <h3>
        {coin.price_change_percentage_24h < 0 ? <span class="trending_down">&#x25BC;  {coin.price_change_percentage_24h}%</span> : <span>&#9650;  {coin.price_change_percentage_24h}%</span>}
        
        </h3>
      </div>
    </div>
  )
}
