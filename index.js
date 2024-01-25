// check for matching passwords
let pwdLengthOk = false;
let pwdMatchOk = false;

function pwdMatchCheck(){
    if(pwdLengthOk && pwdMatchOk){
        submitBtn.disabled = false;
        //submitBtn.style.color = 'white';
        //submitBtn.innerText = 'SUBMIT';
    } else {
        submitBtn.disabled = true;
        //submitBtn.style.color = 'red';
        //submitBtn.innerText = 'FORM NOT READY!';
    }
}

// form
const form = document.querySelector('.reg-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('bullarna e slut!');
    const registrationData = {
        name: nameInput.value,
        username: userInput.value,
        email: emailInput.value,
        password: pwdInput.value
    }

    console.log(registrationData.name);
    alert(`Name: ${registrationData.name}\nUsername: ${registrationData.username}\nEmail: ${registrationData.email}\nPassword: ${registrationData.password}`);
    
});



// Name
const nameLabel = document.querySelector('.name-label');
nameLabel.addEventListener('click', () => {
    nameInput.focus();
});
const nameInput = document.querySelector('.name');
nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    console.log(value);
});

// User name
const userLabel = document.querySelector('.user-label');
userLabel.addEventListener('click', () => {
    userInput.focus();
});
const userInput = document.querySelector('.user');
userInput.addEventListener('input', () => {
    const value = userInput.value;
    console.log(value);
});

// email
const emailLabel = document.querySelector('.e-mail-label');
emailLabel.addEventListener('click', () => {
    emailInput.focus();
});
const emailInput = document.querySelector('.e-mail');
emailInput.addEventListener('input', () => {
    const value = emailInput.value;
    console.log(value);
});

// password
const pwdLabel = document.querySelector('.pwd-label');
pwdLabel.addEventListener('click', () => {
    pwdInput.focus();
});
const pwdInput = document.querySelector('.pwd');
pwdInput.addEventListener('input', () => {
    const fieldSet = document.querySelector('.pwd-field');
    const value = pwdInput.value;
    if(value.length < 8){
        errorInfo.style.color = 'red';
        errorInfo.innerText = 'Your password is too short!';
        fieldSet.style.border = '1px solid red';
        fieldSet.style.color = 'red';
        pwdLengthOk = false;
    } else {
        errorInfo.style.color = 'green';
        errorInfo.innerText = 'Password length is OK!';
        fieldSet.style.border = '1px solid #577f97'
        fieldSet.style.color = 'black';
        pwdLengthOk = true;
    }
    pwdMatchCheck();
    console.log(value);
});

// confirm password
const confPwdLabel = document.querySelector('.conf-pwd-label');
confPwdLabel.addEventListener('click', () => {
    confPwdInput.focus();
});
const confPwdInput = document.querySelector('.conf-pwd');
confPwdInput.addEventListener('input', () => {
    const fieldSet = document.querySelector('.conf-pwd-field');
    const value = confPwdInput.value;
    if(value != pwdInput.value){
        errorInfo.style.color = 'red';
        errorInfo.innerText = `Your password doesn't match!`;
        fieldSet.style.border = '1px solid red';
        fieldSet.style.color = 'red';
        pwdMatchOk = false;
    } else {
        errorInfo.style.color = 'green';
        errorInfo.innerText = 'Password is a match!';
        fieldSet.style.border = '1px solid #577f97'
        fieldSet.style.color = 'black';
        pwdMatchOk = true;
    }
    pwdMatchCheck();
    console.log(value);
});

const errorInfo = document.querySelector('.error-info');
errorInfo.innerText = '';


// button
const submitBtn = document.querySelector('button');
/*
submitBtn.addEventListener("click", (e) => {
    console.log('This is the event: ', e.target);
})
*/







