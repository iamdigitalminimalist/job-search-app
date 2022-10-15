import React, { useReducer, useContext, MouseEventHandler } from 'react';
import { reducer } from './reducer';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './actions';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  showSidebar: boolean;
  displayAlert?: () => void;
  registerUser?: (currentUser: {
    password: string;
    name: string;
    email: string;
  }) => object;
  loginUser?: (currentUser: { password: string; email: string }) => void;
  toggleSidebar?: MouseEventHandler<HTMLButtonElement> | undefined;
  logoutUser?: MouseEventHandler<HTMLButtonElement> | undefined;
  updateUser?: (p: {
    lastName: string;
    name: string;
    location: string;
    email: string;
  }) => void;
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
  showSidebar: false,
};

const AppContext = React.createContext<AppContextInterface | undefined>(
  undefined
);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  // request
  authFetch.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (!config?.headers) {
        throw new Error(
          `Expected 'config' and 'config.headers' not to be undefined`
        );
      }
      config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // response
  authFetch.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      // console.log(error.response);
      if (error.response?.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

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
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response !== undefined) {
          dispatch({
            type: REGISTER_USER_ERROR,
            payload: { msg: error.response.data.msg },
          });
        }
      } else {
        console.error(error);
      }
    }
    clearAlert();
  };

  const loginUser = async (currentUser: IUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post('/api/v1/auth/login', currentUser);
      // console.log(response);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response !== undefined) {
          dispatch({
            type: LOGIN_USER_ERROR,
            payload: { msg: error.response.data.msg },
          });
        }
      } else {
        console.error(error);
      }
    }
    clearAlert();
  };

  const updateUser = async (currentUser: IUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      // console.log(data);
      const { user, location, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response !== undefined) {
          if (error.response.status !== 401) {
            dispatch({
              type: UPDATE_USER_ERROR,
              payload: { msg: error.response.data.msg },
            });
          }
        }
      } else {
        console.error(error);
      }
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
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
