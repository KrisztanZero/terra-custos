import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getSessionToken = () => {
  const sessionToken = cookies.get('sessionToken');

  if (!sessionToken) {
        const errorMessage = 'Session token not found';

    console.error('Session token not found');
    return { token: null, error: errorMessage };
  }

  return { token: sessionToken, error: null };
};