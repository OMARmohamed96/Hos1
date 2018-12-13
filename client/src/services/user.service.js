export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/users/signin', requestOptions)
        .then(handleResponse)
        .then(res => {
            // login successful if there's a jwt token in the response
            const user = res.data;
            console.log(user);
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    console.log("Removing the user item");
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/signup', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      console.log(data);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              window.location.reload(true);
          }
          console.log(data);
          const error = (data && data.err.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}
