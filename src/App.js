import './App.css';

function App() {
  return (
<div>
<div class="hero">
<div class="right_cointainer">
    <div class="search box_search">
    <select name="currency" id="currency" class="currency">
      <option value="usd">USD</option>
      <option value="inr">INR</option>
      <option value="matic">Matic</option>
      <option value="xrp">XRP</option>
    </select>
   
    <input type="text" placeholder=" 🔎  Search by coin"></input>
  </div>
  <div class="chart box">
  <div>
      <label>1D</label>
      <label>1W</label>
      <label>1M</label>
      <label>6M</label>
      <label>1Y</label>
      <input type="date" value=""/>
      <select class="chart_dropdown" name="Cryptocurrency" id="cryptoCurrency">
        <option value="btc">Cryptocurrency</option>
        <option value="eth">Etherium</option>
        <option value="matic">Matic</option>
        <option value="xrp">XRP</option>
      </select>
      <select class="chart_dropdown" name="Chart type" id="chart">
        <option value="btc">Chart Type</option>
        <option value="eth">Etherium</option>
        <option value="matic">Matic</option>
        <option value="xrp">XRP</option>
      </select>
  </div>


<div class="cryptoChart">
<img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/2MKEHW6MJFB7VGD353DCQSCEB4.png"/>
</div>

</div>
<div class="bottom ">
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
      <div class="exCoins box">
        <h1 class="exCoin_Label">Exchange Coins</h1>
        <h3 class="ex_value_text">Enter Value</h3>

        <div class="buy"> 
            <div class="buy_tile">
            <label  for="sell">Sell :</label>

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
        <label class="buy_label"for="buy">Buy  :</label>
        <select name="buy" id="buy" class="exchange_currency">
          <option value="bitcoin">Bitcoin</option>
          <option value="etherium">Etherium</option>
          <option value="matic">Matic</option>
          <option value="xrp">XRP</option>
        </select>
   
    </div>
    <h3>230000 Eth</h3></div>
        <button class="exchange">Exchange</button>
      </div>
</div>

      </div>
      <div class="left_cointaimer">

      <div class="marketCapCrypto box">
        <h1 class="cap_tittle">Cryptocurrency by Market Cap</h1>
<div class="cap_tile">
    <h3 class="currency_text">Matic</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
        

    </div>
</div>
<div class="cap_tile">
    <h3 class="currency_text">Bitcoin</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">Etherium</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">Solana</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">XRP</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">USD</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile ">
    <h3 class="currency_text">Tether</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">Litecoin</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">Monero</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   
</div><div class="cap_tile">
    <h3 class="currency_text">Solana</h3>
    <div class="cap">
        <h3>MktCap $197,484</h3>
        <h3>
            <span >&#9650;</span>
          2.12%
        </h3>   
    </div>
   

        
        
      </div>
    </div>
    </div>

     
</div>
</div>
  );
}

export default App;
