document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector('.form-login');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    window.location.href = '/user/login?recoveryEmail=' + encodeURIComponent(document.getElementById('inputEmail').value);
  });
});
