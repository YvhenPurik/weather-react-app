const initialState = {
  ...JSON.parse(localStorage.getItem('weatherStor')) || {}
}
    
  
  
  const weather = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_WEATHER':
     return {
        ...state,
        action.data
      }
   
      case 'UPDATE_WEATHER':
        console.log("action.data", action.data)
        const newState = state.map((el) => {
          if (el.city.id === action.data.city.id) {
            return action.data
          }
          return el
        })
        return newState;
      default:
        return state
    }
  }
  
  export default weather;