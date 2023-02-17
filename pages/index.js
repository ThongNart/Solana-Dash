//import styles from '@/styles/Home.module.css';
import { useState, useEffect } from "react";
import useSWR from 'swr';

import AlertBox from "../components/AlertBox";
import CoinPrice from "../components/CoinPrice"

const url = 'https://rest.coinapi.io/';
const urlSandbox = 'https://rest-sandbox.coinapi.io/';
const searchRate = 'v1/exchangerate/'
const coin = 'USD';
const apiKey = '?apikey=42969BC2-2E78-444F-95A4-92EDB16A924D&invert=true';
const endpoint = urlSandbox+searchRate+coin+apiKey;


function Home(props) {
  console.log("PROPS: ", props)
  const [ solPrice, setSolPrice] = useState(props.solPrice);

  const fetcher = (...args) => fetch(...args).then((res)=> res.json());
  const {data, error} = useSWR(endpoint, fetcher );
  console.log("data from useSWR: ", data)

  useEffect( ()=> {
      if (data === []) {
        const solPrice = data.rates.find( asset => asset.asset_id_quote === 'SOL')

        setSolPrice(solPrice.rate);
      }
    
  }, [data])


  return (
    <div className="text-lg">

      <div className="flex space-x-6 bg-zinc-900 p-7 m-5 rounded-2xl">
      <h3 className="text-zinc-400 mt-1.5">Solana Ecosystem Coins</h3>
        <CoinPrice price={solPrice} coinTicker="SOL" coinLogo="sol-coin.png"/>
        <CoinPrice price={props.c98Price} coinTicker="C98" coinLogo="coin98-coin.png"/>
        <CoinPrice price={props.gmtPrice} coinTicker="GMT"coinLogo="gmt-coin.png"/>
        <CoinPrice price={props.rayPrice} coinTicker="RAY"coinLogo="ray-coin.png"/>
      </div>

      <div className="flex space-x-3 bg-zinc-900 p-7 m-5 rounded-2xl">
      
                <input className="p-3 bg-zinc-800 rounded-md w-full" type="text" placeholder='enter your wallet address...'></input>
                <button className="p-3 bg-zinc-800 rounded-md w-64 hover:bg-zinc-700  active:bg-purple-700" >Check Wallet</button>
            
      </div>


    </div>
  )
}


export async function getStaticProps(){

  try {
    const response = await fetch(endpoint, {header: {Accept: 'application/json'}})
    const data = await response.json()
    const solPrice = data.rates.find( asset => asset.asset_id_quote === 'SOL')
    const c98Price = data.rates.find( asset => asset.asset_id_quote === 'C98')
    const gmtPrice = data.rates.find( asset => asset.asset_id_quote === 'GMT')
    const rayPrice = data.rates.find( asset => asset.asset_id_quote === 'RAY')
    //console.log(solPrice.rate)

    return {
      props: {
        solPrice: solPrice.rate, 
        c98Price: c98Price.rate,
        gmtPrice: gmtPrice.rate,
        rayPrice: rayPrice.rate
      }, 
      revalidate: 6000
  }

  } catch(err) {
    console.log("ERROR: ", err)
    return {
            props: {
                    solPrice: 22.34, 
                    c98Price: 0.3344,
                    gmtPrice: 0.462,
                    rayPrice: 0.3321 
                  }
            }
  }

}

export default Home;