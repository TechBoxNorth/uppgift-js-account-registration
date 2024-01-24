const nameLabel = document.querySelector('.name-label');
nameLabel.addEventListener('click', () => {
    document.querySelector('.name').focus();
});

const userLabel = document.querySelector('.user-label');
userLabel.addEventListener('click', () => {
    document.querySelector('.user').focus();
});

const emailLabel = document.querySelector('.e-mail-label');
emailLabel.addEventListener('click', () => {
    document.querySelector('.e-mail').focus();
});

const pwdLabel = document.querySelector('.pwd-label');
pwdLabel.addEventListener('click', () => {
    document.querySelector('.pwd').focus();
});

const confPwdLabel = document.querySelector('.conf-pwd-label');
confPwdLabel.addEventListener('click', () => {
    document.querySelector('.conf-pwd').focus();
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", () => {
    document.querySelector('body').style.backgroundColor = 'orange';
});