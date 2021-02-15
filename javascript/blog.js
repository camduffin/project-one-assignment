// blog page JS only
const blogPage = document.querySelector('.blog-page');




// BLOG PAGE STICKY ASIDE

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





