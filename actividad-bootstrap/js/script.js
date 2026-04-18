document.addEventListener("DOMContentLoaded", function () {

    // BUTTONS TO SHOW MODAL
    let buttons = document.querySelectorAll('.btn-modal');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        });
    });

    // FORM VALIDATION
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let message = document.getElementById('message');

        const DEFAULT_USER = "prueba@email.com";
        const DEFAULT_PASSWORD = "123456";

        if (email === "" || password === "") {
            message.innerHTML = "All fields are required!";
            message.className = 'text-warning';

        } else if (email === DEFAULT_USER && password === DEFAULT_PASSWORD) {
            message.innerHTML = "Welcome to the system!";
            message.className = 'text-success';

        } else {
            message.innerHTML = "Error: Invalid email or password!";
            message.className = 'text-danger';
        }
    });

});