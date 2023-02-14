//import styles from '@/styles/Home.module.css';
import { useState, useEffect } from "react";
import useSWR from 'swr';

import AlertBox from "../components/AlertBox";

const url = 'https://rest.coinapi.io/';
const urlSandbox = 'https://rest-sandbox.coinapi.io/';
const searchRate = 'v1/exchangerate/'
const coin = 'USD';
const apiKey = '?apikey=42969BC2-2E78-444F-95A4-92EDB16A924D&invert=true';
const endpoint = urlSandbox+searchRate+coin+apiKey;


function Home(props) {
  const [ price, setPrice] = useState(props.solPrice);

  const fetcher = (...args) => fetch(...args).then((res)=> res.json());
  const {data, error} = useSWR(endpoint, fetcher );
  console.log(data)

  useEffect( ()=> {
      if (data === []) {
        const solPrice = data.rates.find( asset => asset.asset_id_quote === 'SOL')

        setPrice(solPrice.rate);
      }
    
  }, [data])


  return (
    <div className="text-3xl">
      <div className="flex space-x-3">
        <img className="rounded-full w-9 h-9 mt-1.5" src="./sol-coin.png" alt="sol coin logo" />
        <h1 className="bg-zinc-600 rounded-lg p-1">SOL</h1>
        <h1 className="bg-blue-700 rounded-lg p-1">${price.toFixed(2)} USD</h1>
      </div>
    </div>
  )
}


export async function getStaticProps(){

  try {
    const response = await fetch(endpoint, {header: {Accept: 'application/json'}})
    const data = await response.json()
    const solPrice = data.rates.find( asset => asset.asset_id_quote === 'SOL')
    console.log(solPrice.rate)

    return {props: {solPrice: solPrice.rate}, revalidate: 100000}
  } catch(err) {
    console.log("ERROR: ", err)
    return {props: {solPrice: 0}}
  }

}

export default Home;