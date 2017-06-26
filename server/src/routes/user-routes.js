import userService from '../services/UserService';

module.exports = (app) => {
  app.get('/api/users/', (req, res) => {
    let result = userService.getUser(0);

    res.send(result);
  });
}