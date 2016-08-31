function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (action && typeof action.payload === 'function') {
      return action.payload(dispatch, getState, extraArgument);
    }
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
