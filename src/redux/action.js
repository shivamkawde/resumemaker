export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setTamplate = (code) => {
  return {
    type: "SET_TAMPLATE",
    payload: code,
  };
};

export const setDetails = (detail) => {
  return {
    type: "SET_DETAILS",
    payload: detail,
  };
};
