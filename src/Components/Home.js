import React, { useEffect } from "react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div className="header">
        <h1>Crypto Tracker</h1>
        <a><CiMenuBurger /></a>
      </div>
      <table id="table">
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td id="img-td">
                  <img alt="img" src={item.image} />
                  {item.id}
                </td>
                <td id="item-symbol">{item.symbol}</td>
                <td>${item.current_price}</td>
                <td>${item.market_cap}</td>
                <td id="percent-text">{item.price_change_percentage_24h}%</td>
                <td>Market Cap: ${item.market_cap}</td>
                <td></td>
              </tr>
            );
          })}
          {/* <tr>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>$20023</td>
          <td>25416</td>
          <td>%71512%</td>
          <td>market Cap: 21674</td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
