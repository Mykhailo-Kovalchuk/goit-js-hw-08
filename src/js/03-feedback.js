// 4. використання бібліотеки lodash
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('#email-area');
const messageArea = document.querySelector('#message-area');

// 1. Відстеження продії на інпут та запис дій користувача у локальне сховище
// Код видозмінився і записаний в нижче - 4. 

// emailInput.addEventListener('input', saveDataEmailInLS);
// messageArea.addEventListener('input', saveDataEmailInLS);

// function saveDataEmailInLS () {
//     const emailData = {
//         email: emailInput.value,
//         message: messageArea.value
//     }
// localStorage.setItem('feedback', JSON.stringify(emailData));
// }

// 4. Оновлення даних в сховищі з частотою до 500 мс.

const saveDataEmailInLSLodash = throttle(() => {
    const emailData = {
        email: emailInput.value,
        message: messageArea.value
    }
    localStorage.setItem('feedback', JSON.stringify(emailData))
}, 500);

emailInput.addEventListener('input', saveDataEmailInLSLodash);
messageArea.addEventListener('input', saveDataEmailInLSLodash);




// 2. Під час завантаження сторінки перевіряй стан сховища і додає значення зі сховища якщо вони там є.
window.addEventListener('load', () => {
    
const savedEmailData = localStorage.getItem('feedback');
if (savedEmailData) {
    const emailData = JSON.parse(savedEmailData);
    emailInput.value = emailData.email;
    messageArea.value = emailData.message;
}
});

// 3.1 Очищення даних при сабміті.

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
event.preventDefault();

localStorage.removeItem('feedback');

// 3.2 виведення email i message у консоль.

const formData = {
    email: emailInput.value,
    message: messageArea.value
}

emailInput.value = '';
messageArea.value = '';

console.log(formData);
}


