function validate() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var website = document.forms["contactForm"]["website"].value;
  var subject = document.forms["contactForm"]["subject"].value;
  var errors = document.getElementsByClassName("errors");
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
  var isValid = true;
  if (name.trim() === "") {
    errors[0].innerHTML = "Please enter your name";
    isValid = false;
  }
  if (email.trim() === "") {
    errors[1].innerHTML = "Please enter your email";
    isValid = false;
  } else if (!isValidEmail(email)) {
    errors[1].innerHTML = "Please enter a valid email address";
    isValid = false;
  }
  if (website.trim() === "") {
    errors[2].innerHTML = "Please enter your website";
    isValid = false;
  } else if (!isValidUrl(website)) {
    errors[2].innerHTML = "Please enter a valid URL";
    isValid = false;
  }
  if (subject.trim() === "") {
    errors[3].innerHTML = "Please enter a message";
    isValid = false;
  }
  return isValid;
}
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidUrl(url) {
  var urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return urlRegex.test(url);
}
