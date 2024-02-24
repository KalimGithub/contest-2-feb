import React, { useEffect } from 'react'
import { useState } from 'react'
// import { ReactDOM } from 'react-dom';

const Home = () => {

  
const [data, setData] = useState([])
useEffect(()=>{
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
      setData(res);
    })
    .catch((err) => console.log(err));
  }, [])

   
  return (
    <div className='home'>
      <table id='table'>
        <tbody>
          {
            data.map((item)=>{
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td></td>
                </tr>
                )
            })
          }
         <tr>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>$20023</td>
          <td>25416</td>
          <td>%71512%</td>
          <td>market Cap: 21674</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home