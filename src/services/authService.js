import Cookies from "universal-cookie";

export async function register(user) {
  const response = await fetch('http://localhost:7021/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user?.username,
      email: user?.email,
      password: user?.password,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch register');
  }
  return await response.json();
}

export async function login(user) {
  const response = await fetch('http://localhost:7021/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user?.username,
      email: user?.email,
      password: user?.password,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch login');
  }
  return await response.json();
}

export async function logout(user, setUser) {
  const cookies = new Cookies();
  const sessionToken = cookies.get('sessionToken');

  if (!sessionToken) {
    return;
  }

  const response = await fetch('http://localhost:7021/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify({
      username: user?.username,
      email: user?.email,
      password: user?.password,
    }),
  });

  if (!response.ok) {
    console.error('Failed to fetch logout:', response.status, response.statusText);
  }

  cookies.remove('sessionToken');

  setUser(null);
}

export async function checkUsernameAndEmail(username, email) {
  try {
    const response = await fetch(`http://localhost:7021/api/auth/check-username-email?username=${username}&email=${email}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Failed to check username and email availability');
    }
    return await response.text();
  } catch (error) {
    console.error('Error during username and email availability check:', error);
    throw error;
  }
}