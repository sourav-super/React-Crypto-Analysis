import React from 'react'

const Exchangecard = ({ name, img, rank, ur }) => {
    return (
        <>
            <div>
                <a href={ur} target={"blank"}>
                    <div className='card'>


                        <img src={img} alt="pic" />
                        <h1>{rank}</h1>
                        <p>{name}</p>


                    </div>
                </a>

            </div>
        </>
    )
}

export default Exchangecard