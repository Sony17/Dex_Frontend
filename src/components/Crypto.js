import '../App.css'
import useAxios from "../hooks/useAxios"
import TrendingTile from './TrendingTile';
export default function Crypto() {

  const { response, loading } = useAxios('coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2Ctether%2C%20binancecoin%2Cusd-coin%2C%20ripple%2Cbinance-usd%2C%20cardano%2C%20solana%2C%20dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false');
console.log(response)

  return (
    <div class="marketCapCrypto box">
      <h1 class="cap_tittle">Cryptocurrency by Market Cap</h1>
       {response && response.map(coin =>  <TrendingTile key={coin.id} coin={coin}/>)}
      

    </div>
  )
}
