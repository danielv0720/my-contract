export const getUsers = async () => {
  const url = `https://reqres.in/api/users?page=2`;
  const users = await fetch(url);
  const { data } = await users.json();
  return data
}