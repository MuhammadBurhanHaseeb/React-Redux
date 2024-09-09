import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement,decrementByAmount ,increment,incrementByAmount , getUserAccount  } from "../actions";

// this is by props instaed of react-redux 
// function Account({increment , deccrement , incrementByAmmount ,   account })
function Account()// this is from react-redux instead of props 
{
    
    // for state value of ammount and bonus that is in create store
    // react-redux gives us easily access through providers  
    const amount =useSelector(state => state.account.amount);
    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch(); // for dispatch in react redux 

    // let [account , setAccount] = useState({amount : 0});
    let [value , setValue] = useState();
    // let value = 0;

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
    //     setAccount({amount: account.amount + parent(val)})
    // }
    // function handleInputValue()
    // {
    //     value = document.querySelector('#accInput').value;
       
    // }
    return (
        <>
            <div className="accountCard">
                <h3>Account Component</h3>
                <p className="para" >Ammount :{amount} Bonus :{points}</p>
                <div className="accButtonDiv">
                    <button onClick={()=>dispatch(increment())}>Increment + </button>
                    <button onClick={()=>dispatch(decrement())}>decrement - </button>
                    {/* <input  type="text" className="input" id="accInput"  onChange={handleInputValue}/> */}
                    <input  type="text" className="input" id="accInput"  onChange={(e)=>setValue(+e.target.value )}/>
                    <button onClick={()=>dispatch(incrementByAmount(value))} >Increment by {amount} + </button>
                    <button onClick={()=>dispatch(decrementByAmount(value))} >Decrement by {amount} + </button>
                    <button onClick={()=>dispatch(getUserAccount(1))} >Init AccUser {amount} + </button>
                </div>
            </div>
        </>
    )
} 
export  default Account;
