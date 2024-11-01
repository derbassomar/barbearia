let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slid-foto');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    const slideContainer = document.querySelector('.slid');
    
   
    if (slideContainer) {
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    } else {
        console.error("Elemento .slid não encontrado");
    }
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}


window.onload = () => {
    showSlides();
};



    document.querySelector('form').addEventListener('submit', function(event) {
        alert('Formulário enviado com sucesso!');
    });

