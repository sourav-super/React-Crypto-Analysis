import React from 'react'
import { Link } from 'react-router-dom'

const Coincard = ({ id, name, symbol, imgsrc, price, currencysymbol = "₹" }) => {
  return (
    <>


      <Link className="coinlink" to={`/coindeatils/${id}`} target={"blank"}>
        <div className='card'>
          <img className='coin-img' src={imgsrc} alt="pic" />
          <h1>{symbol}</h1>
          <p>{name}</p>
          <p>{price ? `${currencysymbol}${price}` : "NA"}</p>


        </div>
      </Link>


    </>
  )
}

export default Coincard