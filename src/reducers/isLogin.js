export const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'login':
      return true;
    default:
      return false;
  }
};
