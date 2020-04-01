const initialState = {
   id: NaN,
   username: '',
   password: '',
   profile_pic: ''
}

const SET_USER = 'SET_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

export function getUser() {
   return {
      type: GET_USER
   }
}

export function setUser(userObj) {
   return {
      type: SET_USER,
      payload: userObj
   }
}

export function logoutUser() {
   return {
      type: LOGOUT_USER,
      payload: {}
   }
}

export default function reducer(state = initialState, action) {
   const {type, payload} = action;
   switch(type) {
      case SET_USER:
         console.log(payload)
         return {...state, ...payload};
      case LOGOUT_USER: 
         return {...state, ...payload};
      case GET_USER:
         return {...state}
      default: 
         return state;
   }
}