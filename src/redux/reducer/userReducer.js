const init = {
  isAuthenticated: false,
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, ...payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...init };
    default:
      return state;
  }
};
