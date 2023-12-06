import Cookies from 'universal-cookie';

export async function getUserRoles() {
  const cookies = new Cookies();
  const sessionToken = cookies.get('sessionToken');
  if (!sessionToken) {
    return null;
  }
  const response = await fetch(
    `http://localhost:7021/api/user/get-user-roles`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${sessionToken}`,
        'Content-Type': 'application/json',
      },
    });
  if (!response.ok) {
    throw new Error('Failed to get user roles by sessionToken');
  }
  return await response.json();
}
