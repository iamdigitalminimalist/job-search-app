import React, { useReducer, useContext } from "react";
import { reducer } from "./reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

export interface AppContextInterface {
  isLoading: boolean,
  showAlert: boolean,
  alertText: string,
  alertType: string,
  displayAlert?: () => void
}

const initialState: AppContextInterface = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: ""
};

const AppContext = React.createContext<AppContextInterface | undefined>(undefined);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT
      });
    }, 3000);
  };

  return <AppContext.Provider
    value={{ ...state, displayAlert }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useAppContext must be used inside AppContext.Provider");
  }
  return context;
};

export { AppProvider, initialState, useAppContext };
