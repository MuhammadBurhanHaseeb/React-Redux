import { getAccUserFullfiled,
    getAccUserPending,
    getAccUserRejected,
    inc,dec,incByAmount,
    decByAmount  } from "../actions";


// account reducer
export function accountReducer (state={amount:1} , action)
{
/// switch way 
switch(action.type)
{
    case inc:
        return {amount : state.amount + 1} ;
    case dec:
        return {amount : state.amount - 1 };
    case incByAmount:
        return {amount : state.amount + action.payload};
    case decByAmount:
        return {amount : state.amount - action.payload};
    case getAccUserFullfiled:
        return {amount : action.payload , pending : false , fulfilled : true }  ; 
    case getAccUserRejected:
        return {...state , error : action.error , pending : false } ; 
    case getAccUserPending:
        return {...state , pending:true } ;           
    default:
        return state;     

    }
 
}