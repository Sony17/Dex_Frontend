import '../App.css'
export default function Chart() {
  return (
    <div class="chart box">
      <div>
        <label>1D</label>
        <label>1W</label>
        <label>1M</label>
        <label>6M</label>
        <label>1Y</label>
        <input type="date" value="" />
        <select
          class="chart_dropdown"
          name="Cryptocurrency"
          id="cryptoCurrency"
        >
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
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/2MKEHW6MJFB7VGD353DCQSCEB4.png" />
      </div>
    </div>
  )
}
