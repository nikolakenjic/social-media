import fetchUrl from './utils/axios';

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: 'LOGIN_START' });

  try {
    const res = await fetchUrl.post('/auth/login', userCredentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.user });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
