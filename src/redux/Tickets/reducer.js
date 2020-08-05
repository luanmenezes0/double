const initialState = {
  user: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "kjd":
      return { ...state }

    default:
      return state
  }
}

export default reducer;