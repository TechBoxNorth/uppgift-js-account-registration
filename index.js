const form = document.querySelector('.reg-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Form was submitted!');
});

const nameInput = document.querySelector('.name');
nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    console.log(value);
});

const userInput = document.querySelector('.user');
userInput.addEventListener('input', () => {
    const value = userInput.value;
    console.log(value);
});

const emailInput = document.querySelector('.e-mail');
emailInput.addEventListener('input', () => {
    const value = emailInput.value;
    console.log(value);
});

const pwdInput = document.querySelector('.pwd');
pwdInput.addEventListener('input', () => {
    const value = pwdInput.value;
    if(value.length < 8){
        console.log('not long enough')
    }
    console.log(value);
});

const confPwdInput = document.querySelector('.conf-pwd');
confPwdInput.addEventListener('input', () => {
    const value = confPwdInput.value;
    if(value != pwdInput.value){
        console.log('does not match');
    }
    console.log(value);
});

const submitBtn = document.querySelector('button');
submitBtn.addEventListener("click", (e) => {
    console.log('This is the event: ', e.target);
})


















/*
const nameLabel = document.querySelector('.name-label');
const nameInput = document.querySelector('.name');
nameLabel.addEventListener('click', () => {
    nameInput.focus();
});

const userLabel = document.querySelector('.user-label');
const userInput = document.querySelector('.user');
userLabel.addEventListener('click', () => {
    userInput.focus();
});

const emailLabel = document.querySelector('.e-mail-label');
const emailInput = document.querySelector('.e-mail');
emailLabel.addEventListener('click', () => {
    emailInput.focus();
});

const pwdLabel = document.querySelector('.pwd-label');
const pwdInput = document.querySelector('.pwd');
pwdLabel.addEventListener('click', () => {
    pwdInput.focus();
});

const confPwdLabel = document.querySelector('.conf-pwd-label');
const confPwdInput = document.querySelector('.conf-pwd');
confPwdLabel.addEventListener('click', () => {
    confPwdInput.focus();
});
*/