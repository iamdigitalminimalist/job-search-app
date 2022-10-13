import React, { useReducer, useContext } from 'react';
import { reducer } from './reducer';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './actions';
import axios from 'axios';

export interface IUser {
  name: string;
  password: string;
  email: string;
  location?: string;
  lastName?: string;
}

export interface ILocalStorage {
  user: IUser;
  token: string;
  location: string;
}

export interface AppContextInterface {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: IUser | null;
  token: string | null;
  userLocation: string;
  jobLocation: string;
  displayAlert?: () => void;
  registerUser?: (currentUser: {
    password: string;
    name: string;
    email: string;
  }) => object;
  loginUser?: (currentUser: { password: string; email: string }) => void;
}

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const initialState: AppContextInterface = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
};

const AppContext = React.createContext<AppContextInterface | undefined>(
  undefined
);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addUserToLocalStorage = (props: ILocalStorage) => {
    localStorage.setItem('user', JSON.stringify(props.user));
    localStorage.setItem('token', JSON.stringify(props.token));
    localStorage.setItem('location', JSON.stringify(props.location));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  const registerUser = async (currentUser: IUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      // console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error: any) {
      // console.error(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const loginUser = async (currentUser: IUser) => {
    console.log(currentUser);
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error('useAppContext must be used inside AppContext.Provider');
  }
  return context;
};

export { AppProvider, initialState, useAppContext };
