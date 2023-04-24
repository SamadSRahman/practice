const initialState = {
    value: ""
  }
  
  const sampleReducer = (state=initialState, action) => {
    switch(action.type){
      case 'CHANGE_INPUT_VALUE':
        return{
          ...state,
          value: action.payload
        }
      // other cases ...
      default: 
       return state
    }
  }