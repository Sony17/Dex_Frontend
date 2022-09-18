import '../App.css'
export default function Portfolio() {
  return (
    <div class="portfolio box">
      <div class="portfolio_top">
        <h1>Portfolio</h1>
        <h1>
          <span class="total_value">Total value</span>
          <strong>$1000</strong>
        </h1>
      </div>
      <div class="value">
        <img src="https://cdn.dribbble.com/users/2903114/screenshots/5771801/circle-dribble.gif" />
        <ul>
          <li>Matic</li>
          <li>Solana</li>
          <li>Luna</li>
          <li>Etherium</li>
          <li>Ripple</li>
          <li>Bitcoin</li>
          <li>Monero</li>
        </ul>
      </div>
    </div>
  )
}
