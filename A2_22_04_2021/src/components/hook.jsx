import { useEffect, useReducer } from "react";

export const FetchHook = (endpoint) => {
  const initialState = {
    data: [],
    error: "",
    loading: true,
  };

  const [data, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  },[]);

  return data;
};

function apiReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}
