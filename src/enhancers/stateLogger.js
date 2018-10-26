export default next => (...args) => {
  const store = next(...args);
  store.subscribe(() => console.log(store.getState()));
  return store;
};
