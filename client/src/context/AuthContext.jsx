import { useReducer, createContext } from 'react';
import AuthReducer from './AuthReducer';

const initialState = {
  user: {
    _id: '66d74fcd4c5a276adece1976',
    username: 'arijan1',
    email: 'arijan2@gmail.com',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
