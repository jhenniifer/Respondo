const signInForm = document.querySelector('.signin__form');

 function validateSignIn(e) {
    e.preventDefault();

    // Select the input fields
    const fullName = document.getElementById('name');
    const companyName = document.getElementById('company');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Select the error fields
    const nameError = document.querySelector('.error__name');
    const companyError = document.querySelector('.error__comname');
    const emailError = document.querySelector('.error__email');
    const passwordError = document.querySelector('.error__password');

    // Reset all error messages
    nameError.textContent = '';
    companyError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    
    // Full name validation
    if (fullName.value.trim() === '') {
        fullName.style.borderColor = 'red';
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
    } else if (fullName.value.trim().length < 2) {
        fullName.style.borderColor = 'red';
        nameError.textContent = 'Name must be at least 2 characters.';
        isValid = false;
    } else {
        fullName.style.borderColor = 'green';
        nameError.textContent = '';
    }


    // Validate Company Name
    if (companyName.value.trim() === '') {
        companyName.style.borderColor = 'red';
        companyError.textContent = 'Company name is required.';
        isValid = false;
    } else if (companyName.value.trim().length < 5) {
        companyName.style.borderColor = 'red';
        companyError.textContent = 'Company name must be at least 5 characters.';
        isValid = false;
    } else {
        companyName.style.borderColor = 'green';
    }

    // Validate Email
    if (email.value.trim() === '') {
        email.style.borderColor = 'red';
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!email.value.includes('@')) {
        email.style.borderColor = 'red';
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
    } else {
        email.style.borderColor = 'green';
    }

    // Validate Password
    if (password.value.trim() === '') {
        password.style.borderColor = 'red';
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 12) {
        password.style.borderColor = 'red';
        passwordError.textContent = 'Password must be at least 12 characters.';
        isValid = false;
    } else {
        password.style.borderColor = 'green';
    }


    if (isValid) {
        console.log('Form submitted successfully!');
        form.submit();
    }
};

if (signInForm) {
    signInForm.addEventListener('submit', validateSignIn);
} else {
    console.log('Form not found!');
}
