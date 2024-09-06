export const LoginStart = () => ({ type: 'LOGIN_START' });

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

// Follow-unfollow
export const Follow = (userId) => ({
  type: 'FOLLOW_USER',
  payload: userId,
});

export const UnFollow = (userId) => ({
  type: 'UNFOLLOW_USER',
  payload: userId,
});
