export default (state = 0, action) => {
  switch (action.type) {
    case "PING":
      return state + 1;
  }
  return state;
};
