
let profileBar = document.querySelector('.container-profile');
let bar = document.querySelector('#bar');
let doti = document.querySelector('.doti');
let dot = document.querySelector('.dot');
let dot2 = document.querySelector('.dot-2');
let btnX = document.querySelector('.btn-x');
let dark = document.querySelector('.slider');




doti.addEventListener('click', function(){
    document.querySelector('header').classList.toggle('header-active');
});
dot.addEventListener('click', function(){
    document.querySelector('header').classList.toggle('header-active');
    document.querySelector('.nav-right').classList.remove('nav-right-active');
});


btnX.addEventListener('click', function(){
    document.querySelector('.nav-right').classList.toggle('nav-right-active');
});
dot2.addEventListener('click', function(){
    document.querySelector('.nav-right').classList.toggle('nav-right-active');
    document.querySelector('header').classList.remove('header-active');
});

function closeNav() {
    document.querySelector('.nav-right').classList.remove('nav-right-active');
    document.querySelector('header').classList.remove('header-active');
}

// ======== DARK MODE =============
dark.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-mode');
})

// ======== TYPING EFFECT =============

const typed = new Typed('.typed', {
    strings: 
    [
        '<i class="im">Michael</i>',
        '<i class="im">Web developer</i>',
        '<i class="im">Freelance</i>'
    ],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'

});



