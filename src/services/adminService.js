export async function getUserById(id) {
  const response = await fetch(`http://localhost:7021/api/user/get-by-id/${id}`);
  if (!response.ok) {
    throw new Error(`User: ${id} not found`);
  }
  return await response.json();
}

export async function getUsers() {
  const response = await fetch(`http://localhost:7021/api/admin/get-all-user/`);
  if (!response.ok) {
    throw new Error(`User with ${email} not found`);
  }
  return await response.json();
}
