import './App.css'
import Crypto from './components/Crypto'
import Search from './components/Search'
import Portfolio from './components/Portfolio'
import Exchange from './components/Exchange'
import Chart from './components/Chart'

function App() {
  return (
    <div>
      <div class="hero">
        <div class="right_cointainer">
          <Search />
          <Chart />
          <div class="bottom">
            <Portfolio />
            <Exchange />
          </div>
        </div>
        <div class="left_cointaimer">
          <Crypto />
        </div>
      </div>
    </div>
  )
}

export default App
