// blog page JS only
const blogPage = document.querySelector('.blog-page');


// STICKY ASIDE
const stickyNav = blogPage.querySelector('aside');

// when the user scrolls the blog page, run this sticky function

blogPage.onscroll = function() {stickyFunction()};

// grab the offset position of the aside

const sticky = stickyNav.offsetTop;

// add a class of 'sticky' when the scroll position is reached

function stickyFunction() {
    if (window.pageYOffset >= sticky){
        stickyNav.classList.add('sticky')
    } else {
        stickyNav.classList.remove('sticky');
    }
};

// the link below really helped me figure out the sticky aside

// https://www.w3schools.com/jsref/prop_element_offsettop.asp


// FORM HANDLING

const formElement = blogPage.querySelector('form');

formElement.addEventListener('submit', function(e){
    e.preventDefault(e);

    // clear all input fields once submitted
    const nameInput = blogPage.querySelector('input[type="text"]');
    nameInput.value = '';

    const emailInput = blogPage.querySelector('input[type="email"]');
    
    emailInput.value = '';

    const commentInput = blogPage.querySelector('textarea');
    
    commentInput.value = '';

});

// reset input values if page is refreshed
blogPage.querySelector('form').reset();





