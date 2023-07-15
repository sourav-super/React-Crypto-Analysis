import React, { useEffect, useState } from 'react'
import Load from './Load';
import { useParams } from "react-router-dom"
import Errorcomponent from './Errorcomponent';
import { server } from "../index"
import axios from 'axios';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react"

const Coindetails = () => {
  const [coin, setcoin] = useState({});
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false);
  const [currency, setcurrency] = useState("inr");

  const params = useParams();
  const currencysymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setcoin(data)
        setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }
    }
    fetchcoins();

  }, [params.id])

  if (error) return <Errorcomponent />
  return (
    loading ? <Load /> :
      <>
        <div className='container'>
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
          <div className='main'>
            <p className='Lupdate'>Last upadte on {Date(coin.market_data.last_updated).split("G")[0]}</p>
            <div className='card_coin'>

              <img src={coin.image.large} alt='pic' />
              <Stat my={"20px"}>
                <StatLabel fontSize={"20px"} fontStyle={"Noto Sans sans-serif"}>{coin.name}</StatLabel>
                <StatNumber fontSize={"20px"}>{currencysymbol}{coin.market_data.current_price[currency]}</StatNumber>
                <StatHelpText>
                  <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
              <span class="badge">#{coin.coingecko_rank}</span>

              <div className='Progress_details'>
                <progress id="file" value="50" max="100"> 32% </progress>
                <div className='range_check'>
                  <span class="market_range_low">{currencysymbol}{coin.market_data.low_24h[currency]}</span>
                  <p>24H Range</p>
                  <span class="market_range_high">{currencysymbol}{coin.market_data.high_24h[currency]}</span>
                </div>
                <div className='item'>
                  <Item title={"MAX-SUPPLY"} value={coin.market_data.max_supply} />
                  <Item title={"CIRCULATING SUPPLY"} value={coin.market_data.circulating_supply} />
                  <Item title={"MARKET CAP"} value={`${currencysymbol}${coin.market_data.market_cap[currency]}`} />
                  <Item title={"ALL TIME LOW"} value={`${currencysymbol}${coin.market_data.atl[currency]}`} />
                  <Item title={"ALL TIME HIGH"} value={`${currencysymbol}${coin.market_data.ath[currency]}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

  )
};
const Item = ({ title, value }) => (
  <ul>
    <p>{title}</p>
    <p>{value}</p>

  </ul>

)



export default Coindetails