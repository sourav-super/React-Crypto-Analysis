import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { server } from "../index"
import { useState } from 'react'
import Exchangecard from './Exchangecard'
import Errorcomponent from './Errorcomponent'
import Load from "./Load"

const Exchanges = () => {
    const [exchanges, setexchanges] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false);

    useEffect(() => {
        const fetchExchange = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                console.log(data);
                setexchanges(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);
            }

        };
        fetchExchange();

    }, [])

    if (error) return <Errorcomponent />
    return (
        <>
            <div className='exchange'>
                <div className='exchangemain'>
                    {
                        loading ? <Load /> :

                            exchanges.map((i) => (
                                <Exchangecard name={i.name} key={i.id} img={i.image} rank={i.trust_score_rank} ur={i.url} />
                            ))
                    }
                </div>
            </div>
        </>

    )
}

export default Exchanges