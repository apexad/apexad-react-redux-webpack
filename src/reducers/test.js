const inititalState = {
  test: [],
  error: false,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case 'TEST_FETCH':
      return { ...state,
        test: action.payload
      };
    case 'TEST_ERROR':
      return { ...state,
        error: true,
      };
    default:
      return state;
  }
}