import { REQUEST, FAILURE, SUCCESS } from "../actionType.util";
import { actionType } from "../actions/user.action";
import { deleteUtil, editUtil } from "../../helpers/utils";

const APP_STATE = {
  getUsersResponse: null,
};

const UserReducer = (state = APP_STATE, actions) => {
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
        getUsersResponse: actions.payload.data,
        getUsersError: null,
      };
    case FAILURE(actionType.GET_USER):
      return {
        ...state,
        getUsersLoading: false,
        getUsersResponse: null,
        getUsersError: actions.payload,
      };
    //add user
    case REQUEST(actionType.ADD_USER):
      return {
        ...state,
        addUserLoading: true,
        addUserSuccess: null,
        addUserFailure: null,
      };
    case SUCCESS(actionType.ADD_USER):
      return {
        ...state,
        addUserLoading: false,
        addUserSuccess: actions.payload,
        getUsersResponse: [...state.getUsersResponse, actions.payload.data],
        addUserFailure: null,
      };
    case FAILURE(actionType.ADD_USER):
      return {
        ...state,
        addUserLoading: false,
        addUserSuccess: null,
        addUserFailure: actions.payload,
      };
    //delete user
    case REQUEST(actionType.DELETE_USER):
      return {
        ...state,
        deleteUserLoading: true,
        deleteUserSuccess: null,
        deleteUserFailure: null,
      };
    case SUCCESS(actionType.DELETE_USER):
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserSuccess: true,
        getUsersResponse: deleteUtil(
          [...state.getUsersResponse],
          actions.payload.id
        ),
        deleteUserFailure: null,
      };
    case FAILURE(actionType.DELETE_USER):
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserSuccess: null,
        deleteUserFailure: actions.payload,
      };
    //edit user
    case REQUEST(actionType.EDIT_USER):
      return {
        ...state,
        editUserLoading: true,
        editUserSuccess: null,
        editUserFailure: null,
      };
    case SUCCESS(actionType.EDIT_USER):
      return {
        ...state,
        editUserLoading: false,
        editUserSuccess: actions.payload.data,
        getUsersResponse: editUtil(
          [...state.getUsersResponse],
          actions.payload.data
        ),
        editUserFailure: null,
      };
    case FAILURE(actionType.EDIT_USER):
      return {
        ...state,
        editUserSuccess: null,
        editUserFailure: null,
        editUserLoading: false,
      };
    //sort users
    case actionType.SORT_USER:
      return { ...state, getUsersResponse: actions.payload };
    //default state
    default:
      return { ...state };
  }
};

export default UserReducer;
