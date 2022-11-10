var list = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function (event) {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < this.response.length; i++) {
    var user = document.createElement('li');
    user.textContent = xhr.response[i].name;
    list.appendChild(user);

  }
});
xhr.send();
