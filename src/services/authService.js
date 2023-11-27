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
