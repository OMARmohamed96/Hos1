const User = require('./models/User');
const empty = require('is-empty');


module.exports.signup = function(username, password) {
  return new Promise((resolve, reject) => {
    User.find({username: username}).then(function(result) {
      if(!empty(result)) {
        return reject({message: "Username already exists."});
      }

      const newUser = new User({
        username: username,
        password: password
      });

      newUser.save().then(function() {
        if(newUser.isNew) {
          return reject({message: "Registration error."});
        }
        console.log('User: ' + newUser.username + ' Signed Up.');
        return resolve(newUser);
      });
    });
  });

}

module.exports.signin = function (username, password) {
  return new Promise((resolve, reject) => {
    User.find({username: username, password: password}).then(function(result) {
      if(empty(result)) {
        return reject({message: "Invalid username/password combination!"});
      }
      [result] = result;
      return resolve(result);
    });
  });
}
