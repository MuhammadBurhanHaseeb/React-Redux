import { incBonus,incByAmount  } from "../actions";


// bonus reducer 

export function bonusReducer (state={points:1} , action)
{
/// switch way 
    switch(action.type)
    {
        case incBonus:
            return {points : state.points + 1} ;
        case incByAmount:
            if(action.payload >=100)
              return {points : state.points + 1} ;
        default:
            return state;     

    }
}