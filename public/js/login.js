const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name: username, password: password }),
            headers: { 'Content-Type ': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Login failure');
        }
    }
};

const signUpHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();

    if (username && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                name: username,
                password: password,
                }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
          } else {
            alert(response.statusText);
          }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpHandler);