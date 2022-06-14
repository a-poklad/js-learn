const counterReducer = (state = {value: 0}, action) => {
  switch (action.type) {
    case 'increment' :
      return {
        ...state,
        value: state.value + 1,
      }
    case 'decrement' :
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return state
  }
}

export default counterReducer;
