document.addEventListener("DOMContentLoaded", function () {
  const errMessage = document.querySelectorAll(".error-message");
  const form = document.getElementById("register-form");

  form.addEventListener("submit", function validateForm(e) {
    e.preventDefault();
    let isError = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    };

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.classList.remove("error");
    });

    errMessage.forEach((err) => {
      err.classList.add("hidden");
    });

    if (firstName.value === "") {
      isError.firstName = true;
      errMessage[0].classList.remove("hidden");
      firstName.classList.add("error");
      firstName.placeholder = "";
    } else {
      isError.firstName = false;
      errMessage[0].classList.add("hidden");
    }

    if (lastName.value === "") {
      isError.lastName = true;
      errMessage[1].classList.remove("hidden");
      lastName.classList.add("error");
      lastName.placeholder = "";
    } else {
      isError.lastName = false;
      errMessage[1].classList.add("hidden");
    }

    if (email.value === "") {
      isError.email = true;
      errMessage[2].classList.remove("hidden");
      email.classList.add("error");
      email.placeholder = "email@example/com";
    } else if (validateEmail(email.value)) {
      isError.email = true;
      errMessage[2].classList.remove("hidden");
      email.classList.add("error");
      email.placeholder = "email@example/com";
    } else {
      isError.email = false;
      errMessage[2].classList.add("hidden");
    }

    if (password.value === "") {
      isError.password = true;
      errMessage[3].classList.remove("hidden");
      password.classList.add("error");
      password.placeholder = "";
    } else {
      isError.password = false;
      errMessage[3].classList.add("hidden");
    }

    if (
      !isError.email &&
      !isError.firstName &&
      !isError.lastName &&
      !isError.password
    ) {
      alert("Form submitted successfully!");
    }
  });

  // Helper function to validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
