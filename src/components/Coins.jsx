import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from "../index"
import Coincard from './Coincard'
import Load from './Load'
import Errorcomponent from './Errorcomponent'

const Coins = () => {
  const [coines, setcoines] = useState([]);
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState("inr");

  const currencysymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changepage = (page) => {
    setpage(page)
    setloading(true)
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        console.log(data);
        setcoines(data)
        setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }
    }
    fetchcoins();

  }, [currency, page])
  if (error) return <Errorcomponent />
  return (
    <> <div className='container'>
      <form>
        <input type="radio" id="html" name="fav_language" value="inr" onClick={(e) => {
          setcurrency(e.target.value)
        }} />
        <label for="html">INR</label>
        <input type="radio" id="css" name="fav_language" value="usd" onClick={(e) => {
          setcurrency(e.target.value)
        }} />
        <label for="css">USD</label>
        <input type="radio" id="javascript" name="fav_language" value="eur" onClick={(e) => {
          setcurrency(e.target.value)
        }} />
        <label for="javascript">EUR</label>
      </form>



      <div className='coin-main'>
        {loading ? <Load /> :
          coines.map((i) => (
            <Coincard id={i.id} name={i.name} symbol={i.symbol} imgsrc={i.image} key={i.id} price={i.current_price} currencysymbol={currencysymbol} />
          ))
        }

      </div>
      <div className='pagination'>{

        btns.map((item, index) => (
          <button onClick={() => changepage(index + 1)}>{index + 1}</button>
        ))

      }
      </div>
    </div>
    </>
  )
}

export default Coins