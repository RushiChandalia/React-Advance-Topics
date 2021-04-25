import { useEffect, useReducer } from "react";

export const FetchHook = (endpoint) => {
  const initialState = {
    data: [],
    error: "",
    loading: true,
  };

  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });                                //dispatching the action for start

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });           //will only dispatch this if the data is fetched
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });  // wil dispatch if there is error
      });
  },[]);

  return data;
};

function reducer(state, action) {                                     //here the data will be set according to action dispatched
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
