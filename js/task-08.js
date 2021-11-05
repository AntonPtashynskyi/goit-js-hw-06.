const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handelFormSubmit);

function handelFormSubmit(event) {
  event.preventDefault();
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { mail, password };

  if ((mail || password) === '') {
    alert('All fields should be filled!');
  } else {
    loginForm.reset();
    return console.log(formData);
  }
};


// We can use also FormaData method

// const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     console.log(name);
//     console.log(value);
//   })