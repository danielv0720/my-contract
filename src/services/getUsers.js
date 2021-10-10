export const getUsers = async (userId) => {
  const baseApiUrl = 'https://reqres.in/api/users'
  const urlRequest = userId ? `${baseApiUrl}/${userId}` : baseApiUrl;
  const users = await fetch(urlRequest);
  const { data } = await users.json();
  return data;
}