import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
} from "../action";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
