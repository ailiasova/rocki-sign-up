const form = document.querySelector('form');
const btn = form.querySelector('button');

function checkRequired() {
  let isEmail = form['email'].value;
  let isPassword = form['password'].value;
  let isUsername = form['username'].value;
  let TermsAndConditions = form['TermsAndConditions'].checked;
  
  if (isEmail && isPassword && isUsername && TermsAndConditions) {
    console.log('!!!!!!!');
    btn.classList.remove("disable");
  } else {
    btn.classList.add("disable");
  }
}

function checkLoginRequired() {
  let isEmail = form['email'].value;
  let isPassword = form['password'].value;
  if (isEmail && isPassword) {
    btn.classList.remove("disable");
  } else {
    btn.classList.add("disable");
  }
}
