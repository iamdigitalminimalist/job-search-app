const register = (req, res) => {
  res.send('register user');
};
const login = (req, res) => {
  res.send('login');
};
const updateUser = (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
