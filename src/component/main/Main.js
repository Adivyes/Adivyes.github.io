import "./Main.css";
// import hello from "../../assets/hello.jpg";
// import Chart from "../charts/Chart";
import React, { useEffect, useState } from 'react'
import { getTotalSupply } from '../../services/FuseSmartContractFetch'

const Main = () => {
  const formatter = new Intl.NumberFormat('en')
  const [totalSupp, setTotalSupp] = useState(0);
  
const getData = async() => {
const data = await getTotalSupply();

let shortNum = Array.from(String(data), Number)
let newArr = []
for (let i = 0; i < 9; i++) {
if(i === 6 ){newArr.push('.')}
   newArr.push(shortNum[i]);
}
let newNum = newArr.join("")
newNum =  formatter.format(newNum)
setTotalSupp(newNum)


  }

  useEffect(() => { 
    getData()
  }, [])
  
  
  return (
    <main>
      <div className="main__container">

        <div className="main__title">

          <div className="main__greeting">
            
            <h1>Hello Dear Fuser</h1>
            <p>Welcome to our dashboard</p>
          </div>
        </div>


        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-rocket fa-2x"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">fUSD total supply</p>
              <span className="font-bold text-title">{totalSupp}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-repeat fa-2x " aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">fUSD in circulating </p>
              <span className="font-bold text-title">99,400.5 </span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-shield fa-2x "
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">fUSD backed in pegswap </p>
              <span className="font-bold text-title">47,606.42</span>
            </div>
          </div>

        </div>

        <div className="charts">

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Fuse stats </h1>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>My fUSD</h1>
                <p>75,300</p>
              </div>

              <div className="card2">
                <h1>fUSD to swaped</h1>
                <p>40,408,566 </p>
              </div>

              <div className="card3">
                <h1>USDC </h1>
                <p>143,136.189</p>
              </div>

              <div className="card4">
                <h1>Wallet addresses </h1>
                <p>362,040</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;