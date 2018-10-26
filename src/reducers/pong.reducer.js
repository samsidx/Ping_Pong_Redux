export default (state = 0, action) => {
  switch (action.type) {
    case "PONG":
      return state + 1;
  }
  return state;
};
