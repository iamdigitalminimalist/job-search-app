import React, { useReducer, useContext } from 'react';
import { reducer } from './reducer';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
} from './actions';
import axios from 'axios';

export interface IUser {
  name: string;
  password: string;
  email: string;
  location?: string;
  lastName?: string;
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
  registerUser?: () => object;
}

const initialState: AppContextInterface = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
  userLocation: '',
  jobLocation: '',
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

  const registerUser = async (currentUser: IUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
    } catch (error: any) {
      console.error(error.response);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
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
