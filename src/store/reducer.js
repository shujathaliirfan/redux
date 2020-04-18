import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results :[] 
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



               case actionTypes.STORE_RESULT:
               return {
                ...state,
                // results : state.results.concat(state.counter)  we can alse write in objects see the below code for referncce
                results : state.results.concat({id:new Date(),value:state.counter})
               }



               case actionTypes.DELETE_RESULT:

                //    it will mutate the real state
                //    const id =2;
                //const newArray = [...state.results];
                //    newArray.splice(id,1)
                const updatedArray = state.results.filter(result=> result.id !== action.resultId)

               return {
                ...state,
                results : updatedArray
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
    //         