console.log(`It's working`);

const form = document.querySelector('[name="contact-form"]');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    localStorage.setItem('Name', name.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Message', message.value);

    let locName = localStorage.getItem('Name');


    // console.log(name.value);
    // console.log(email.value);
    // console.log(message.value);

    let valid = true;

    if (!validName(name.value)){
        displayError('name-error','Name must only contain characters');
        valid=false;
        name.classList.add('is-invalid');
    }else{
        clearError('name-error');
        name.classList.remove('is-invalid');
    }

    if (message.value.length < 20){
        displayError('message-error', 'Message is required and also must be 10 characters long');
        valid=false;
        message.classList.add('is-invalid');
    }else{
        clearError('message-error');
        message.classList.remove('is-invalid');
    }


    if (!validEmail(email.value)){
        displayError('email-error', 'Must enter a valid email address');
        valid=false;
        email.classList.add('is-invalid');
    }else{
        clearError('email-error');
        email.classList.remove('is-invalid');
    }

    if (valid) 
        document.querySelector('#thanks-message').textContent =`...Thanks for the message ${locName}. I will get back to you soon!`;


    function validEmail(email){
        let emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return emailRegex.test(email);
    }

    function validName(name){
        let nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    }


    function displayError(fieldId, errorMessage){
        let errorSpan = document.getElementById(fieldId);
        errorSpan.textContent = errorMessage;
    }

    function clearError(fieldId){
        let errorSpan = document.getElementById(fieldId);
        errorSpan.textContent= '';
    }
    

});