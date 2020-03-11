export const signup = user => {
  return fetch("https://college-backend.herokuapp.com/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch("https://college-backend.herokuapp.com/api/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authenticate = (jwt, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") localStorage.removeItem("jwt");
  localStorage.removeItem("cart");
  next();
  return fetch("https://college-backend.herokuapp.com/api/signout", {
    method: "GET"
  })
    .then(response => {
      console.log("signout", response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
