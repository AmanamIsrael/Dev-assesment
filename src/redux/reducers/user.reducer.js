import { REQUEST, FAILURE, SUCCESS } from "../actionType.util";
import { actionType } from "../actions/user.action";

const UserReducer = (state = {}, actions) => {
  switch (actions.type) {
    case REQUEST(actionType.GET_USER):
      return {
        ...state,
        getUsersLoading: true,
        getUsersResponse: null,
        getUsersError: null,
      };
    case SUCCESS(actionType.GET_USER):
      return {
        ...state,
        getUsersLoading: false,
        getUsersResponse: actions.payload,
        getUsersError: null,
      };
    case FAILURE(actionType.GET_USER):
      return {
        ...state,
        getUsersLoading: false,
        getUsersResponse: null,
        getUsersError: actions.payload,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
