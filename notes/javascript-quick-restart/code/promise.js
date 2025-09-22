function fetchThatMayFail(url) {
  if (Math.random() >= 0.75) {
    return fetch(url);
  } else {
    return Promise.reject('Custom error.');
  }
}

let url = 'https://eloux.com/async_js/examples/1.json';
var promise = fetchThatMayFail(url);

promise.then(
  response => {
    let json = response.json()
    json.then(json => {
      console.log(json);
    });
  }, 
  error => {
    console.error(error);
  });
