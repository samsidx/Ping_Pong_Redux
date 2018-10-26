export default ({ getState, dispatch }) => next => action => {
  console.log(action);
  next(action);
};
