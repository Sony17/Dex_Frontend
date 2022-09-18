import '../App.css'
export default function Exchange() {
  return (
    <div class="exCoins box">
      <h1 class="exCoin_Label">Exchange Coins</h1>
      <h3 class="ex_value_text">Enter Value</h3>

      <div class="buy">
        <div class="buy_tile">
          <label for="sell">Sell :</label>

          <select name="sell" id="sell" class="exchange_currency">
            <option value="bitcoin">Bitcoin</option>
            <option value="etherium">Etherium</option>
            <option value="matic">Matic</option>
            <option value="xrp">XRP</option>
          </select>
        </div>
        <textarea>Avl:0.002BTC</textarea>
      </div>
      <div class="buy ">
        <div class="buy_tile ">
          <label class="buy_label" for="buy">
            Buy :
          </label>
          <select name="buy" id="buy" class="exchange_currency">
            <option value="bitcoin">Bitcoin</option>
            <option value="etherium">Etherium</option>
            <option value="matic">Matic</option>
            <option value="xrp">XRP</option>
          </select>
        </div>
        <h3>230000 Eth</h3>
      </div>
      <button class="exchange">Exchange</button>
    </div>
  )
}
