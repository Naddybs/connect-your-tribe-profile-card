// selecteert de class click en front (image en card)
let profile = document.querySelector('.click');
let card = document.querySelector('.front');
let image = document.querySelector('.avatar');
// voegt een eventlistener toe aan de class click
profile.addEventListener('click', function() {
    // toggle de class show, schakelt het aan en uit tijdens het klikken
    card.classList.toggle('show');
    image.classList.toggle('showimage');
    

});

