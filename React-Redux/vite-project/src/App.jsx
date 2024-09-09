// import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Account from './Components/Account.jsx'
import Bonus from './Components/Bonus.jsx'
import './App.css'
import { useSelector } from 'react-redux'

// function App({store})
function App()
{
  const amount =useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const account = useSelector(state => state.account);
  // doing getting result without using react-redux // this code is for prop drilling 

  // account 
  // let [account , setAccount] = useState({amount : 0});
  // function increment()
  // {
  //     setAccount({amount: account.amount + 1})

  // }
  // function deccrement()
  // {
  //     setAccount({amount: account.amount - 1})
  // }
  // function incrementByAmmount(val)
  // {
  //     setAccount({amount: account.amount + val})
  // }

  // // bonus 
  // let [bonus , setBonus] = useState({points : 0 });
  // function incrementBonus()
  // {
  //     setBonus({points: bonus.points +1 });
  // }
  

  return (
   <>
      <div className="appDiv">
        <h3>App</h3>
        {/* // jab hum props ke through kr rahe the  */}
        {/* <p className="para">Current Amount:{store.getState().account.amount} </p>
        <p className="para">Total Bonus:{store.getState().bonus.points}</p>
         */}

        {/* // jab hum react-redux provider or useSelector ke through kr rahe hain */}
        {account.pending ?  (<p>loadinng...</p>)
        : account.error ?(<p>{account.error}</p>) : 
        (<p className="para">Current Amount:{amount} </p>)  }
        {/* // <p className="para">Current Amount:{amount} </p> */}
        <p className="para">Total Bonus:{points}</p>
      </div>
    
      {/* // jab hum ne react-redux library use nahi ki thi  */}
      {/* <Account increment = {increment} 
                deccrement ={deccrement}
                incrementByAmmount = {incrementByAmmount} 
                account = {account} 
               />
      <Bonus   store = {store}/> */}

        {/* with react-redux librray to avoid props drilling and easy access of the store  */}
      <Account />
      <Bonus  />
   </>
  
  )
}

export default App
