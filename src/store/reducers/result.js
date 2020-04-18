import * as actionTypes from '../actions'

const initialState = {
   
    results :[] 
}
 


const reducer = (state = initialState, action) => {

      

       switch(action.type){

         case actionTypes.STORE_RESULT:
               return {
                ...state,
                // results : state.results.concat(state.counter)  we can alse write in objects see the below code for referncce
                results : state.results.concat({id:new Date(),value:action.result})
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










    return state;
};

export default reducer;