import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", error: error.message });
    }
  };
};

export const deleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
