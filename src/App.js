import { useState,useEffect } from 'react';
import lottery  from './artifacts/lottery';
import Button from 'react-bootstrap/Button';
import './App.css';
import web3 from './artifacts/web3';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [managerAddress,setManagerAddress] = useState('Fetching address .....');
  const [accounts,setAccounts] = useState({});
  const [players,setPlayers] = useState([]);
  const [entryValue,setEntryValue] = useState('');
  const [message,setMessage] = useState('');
  
  async function getAccountsAndPlayers(){
    let ethAccounts = await web3.eth.getAccounts();
    let lotteryPlayers = await lottery.methods.getPlayers().call()
    setAccounts(ethAccounts);
    setPlayers(lotteryPlayers);
  }

  async function getManagerAddress(){
    let managerAddress = await lottery.methods.manager().call();
    setManagerAddress(managerAddress);
  }

  let enterTheLottery = async(event)=>{
    event.preventDefault();

    setMessage('Entering the lottery, please wait for the transaction!');

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(entryValue, 'ether'),
      gas : 100000
    });

    setMessage('You have entered the lottery');
  }

  let pickWinner = async() => {
    setMessage('Picking a winner, please wait for the transaction!');
    
    await lottery.methods.pickWinner().send({
      from: accounts[0],
      gas : 100000
    });

    setMessage('Winner has been picked!!!!');
  }

  useEffect(() => {
    getAccountsAndPlayers();
    getManagerAddress(); 
  },[]);
  
  return (
    <div className="main-container">
      <div className="text-center">
        <h1>Lottery App</h1>
        <hr/>
      <h4 calssName="card-title">Lottery Manager: {managerAddress}</h4>
      <h4 className="card-text">Number of players in the lottery: {players.length}</h4>
      <hr/>
      <form onSubmit={enterTheLottery}>
        <input value={entryValue} placeholder="Enter more than 0.01 eth" onChange={(e)=>setEntryValue(e.target.value)} />
        <br />
        <Button className="btn-dark" type="submit">Enter the lottery</Button> 
        <div class="alert alert-light" role="alert">
        0.011 eth is a minimum amount to enter a lottery.</div>
      </form>
      <div class="alert alert-info" role="alert">
        Only a manager of the lottery can pick a Winner!</div>
      <Button className="btn-dark" onClick={pickWinner}>Pick a winner</Button>
      <h5>{message}</h5>
      </div>
    </div>
  );
}

export default App;
