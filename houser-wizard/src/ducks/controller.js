const initialState = {
  name: "",
  address: "",
  city: "",
  stateName: "",
  zip: "",
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";

function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action);

  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { stateName: action.payload });
    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });

    default:
      return state;
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(stateName) {
  return {
    type: UPDATE_STATE,
    payload: stateName
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export default reducer;
