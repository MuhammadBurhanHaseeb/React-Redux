import axios from 'axios'


// actions 
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmount = 'account/incrementByAmount';
export const decByAmount = 'account/decrementByAmount';
export const incBonus = 'bonus/increment';

// actions 
export const getAccUserPending  = 'account/getUser/pendind';
export const getAccUserFullfiled  = 'account/getUser/fullfilled';
export const getAccUserRejected  = 'account/getUser/rejected';




// action creators
export function increment()
{
    return {type:inc}

}
export function decrement()
{
    return {type:dec}

}
export function incrementByAmount(value)
{
    return {type:incByAmount, payload : value}

}
export function decrementByAmount(value)
{
    return {type:decByAmount, payload : value}

}
export function incrementBonus()
{
    return {type:incBonus}

}


// async action cretor  generic id function 
export function getUserAccount(id)
{
    return async (dispatch , getState) =>{
        try{
            dispatch(getAccountUserPending());
            const {data} =  await axios.get(`http://localhost:8000/account/${id}`);
            dispatch(getAccountUserFullfiled(data.amount));
        }
        catch(error)
        {
        dispatch(getAccountUserRejected(error.message));
        }
        
    };
    
}

// action creator // fullfilled / Rejected / Pending 
export function getAccountUserFullfiled(value)
{
    return {type : getAccUserFullfiled , payload : value }
}
export function getAccountUserPending(value)
{
    return {type : getAccUserPending , payload : value }
}
export function getAccountUserRejected(value)
{
    return {type : getAccUserRejected , payload : value }
}


