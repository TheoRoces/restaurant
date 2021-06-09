// MenuMobile

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu1').toggleClass('isOpen')
    });
});


// QuitMenu

const btn = document.querySelector('.btn');
let open = false;
btn.addEventListener('click', () => {
    if(!open) {
        menuBtn.classList.add('open');
        open = true;
    } else {
        btn.classList.remove('open');
        menuOpen = false;
    }
});

$(document).ready(function(){
    $('.btn').click(function(){
        $('.menu1').toggleClass('isOpen')
    });
});
