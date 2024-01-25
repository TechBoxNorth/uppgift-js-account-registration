const form = document.querySelector('.reg-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Form was submitted!');
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
    const value = pwdInput.value;
    if(value.length < 8){
        console.log('not long enough')
    }
    console.log(value);
});

// confirm password
const confPwdLabel = document.querySelector('.conf-pwd-label');
confPwdLabel.addEventListener('click', () => {
    confPwdInput.focus();
});
const confPwdInput = document.querySelector('.conf-pwd');
confPwdInput.addEventListener('input', () => {
    const value = confPwdInput.value;
    if(value != pwdInput.value){
        console.log('does not match');
    }
    console.log(value);
});

// button
const submitBtn = document.querySelector('button');
submitBtn.addEventListener("click", (e) => {
    console.log('This is the event: ', e.target);
})






