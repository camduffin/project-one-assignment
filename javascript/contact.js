// contact page JS only
const contactPage = document.querySelector('.contact-page');

// // CONTACT PAGE COMMENT ALERT

const formElement = contactPage.querySelector('form');
// console.log(formElement);

formElement.addEventListener('submit', function(e){
    e.preventDefault();

    // alert the user that their feedback has been submitted
    alert('Thanks so much for your feedback! If necessary, we should get back to you within 5 business days.');

    // clear all input fields once submitted
    const nameInput = contactPage.querySelector('input[type="text"]');
    nameInput.value = '';

    const emailInput = contactPage.querySelector('input[type="email"]');emailInput.value = '';

    const commentInput = contactPage.querySelector('textarea');commentInput.value = '';

    

})

// reset input values if page is refreshed
contactPage.querySelector('form').reset();