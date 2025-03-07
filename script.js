const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});


const servingCard = document.querySelector('.serving-card');
const popUp = document.getElementById('pop-up');
const closeButton = document.getElementById('close-btn')

servingCard.addEventListener('click', function (){
    popUp.classList.remove('hidden');
});

closeButton.addEventListener('click', function (){
    popUp.classList.add('hidden');
})
