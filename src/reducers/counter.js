import * as types from '../actions/ActionTypes';

//리듀서의 초기상태 
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // return { number: state.number + 1 } 
            // return {...state, number: state.number + 1 }
            
            return {
                ...state, 
                number: state.number + 1,
                dumbObject: {
                    ...state.dumbObject, 
                    u: 0
                } 
            }   
        case types.DECREMWNT: 
            return { 
                ...state,
                number: state.number - 1
            }
        case types.RESET_NUMBER:
            return {
                number: 0
            }
        default:
            return state;
    }
}