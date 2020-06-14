import {User} from "../state/user.model";
import {UserActions} from "../actions/user.actions";

const initiateState: User = {
  email: '',
  fullname: '',
  username: '',
  matricNo: '',
  role: '',
  jwtToken: ''
}

export function reducer(state: User[] = [initiateState], action: UserActions) {
  switch (action.type) {
    case(action.type) :
      return [...state, action.payload];
    default:
      return state;
  }
}
