import * as actionTypes from '../actions'

const initialState = {
    counter: 0,
    
}
 


const reducer = (state = initialState, action) => {

      

       switch(action.type){

           case actionTypes.INCREMENT:

               // if we do like this it will be mutated
        //    const newState = state;
        //    newState.counter = state.counter + 1;
       //  return newState;
               
                 const newState = Object.assign({},state);
                 newState.counter = state.counter + 1 ;
                 return newState;

               case actionTypes.DECREMENT:
               return {

                // second way of object.assign 
                   ...state,
                counter: state.counter - 1
               }

               case actionTypes.ADD:
               return {
                ...state,
                counter: state.counter + action.val
               } 

               case actionTypes.SUBTRACT:
               return {
                ...state,
                counter: state.counter + 15
               }







               

               

}












     // second method

    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }


    // if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }


    // if (action.type === 'ADD') {
    //     return {
    //         counter: state.counter + action.val
    //     }
    // }


    // if (action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - action.val
    //     }
    // }
    return state;
};

export default reducer;