import '../App.css'
export default function Search() {
  return (
    <div class="search box_search">
      <select name="currency" id="currency" class="currency">
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="matic">Matic</option>
        <option value="xrp">XRP</option>
      </select>

      <input type="text" placeholder=" 🔎  Search by coin"></input>
    </div>
  )
}
