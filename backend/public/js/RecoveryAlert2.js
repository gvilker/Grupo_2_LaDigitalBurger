document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recoveryEmail = urlParams.get('recoveryEmail');

  if (recoveryEmail) {
    setTimeout(function () {
      alert('Se ha enviado un mail a ' + recoveryEmail);
    }, 500);
  }
});