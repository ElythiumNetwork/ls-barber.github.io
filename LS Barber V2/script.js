// script.js

// Función para cargar reseñas desde el almacenamiento local
function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Limpiar la lista antes de cargar

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => {
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review-container'; // Clase para estilos

        const reviewerName = document.createElement('strong');
        reviewerName.textContent = review.name;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;

        reviewContainer.appendChild(reviewerName);
        reviewContainer.appendChild(reviewText);
        reviewsList.appendChild(reviewContainer);
    });
}

// Manejo del formulario de reseñas
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;

    // Almacenar reseña en el almacenamiento local
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ name: name, text: reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    loadReviews(); // Actualizar la lista de reseñas
    document.getElementById('reviewForm').reset(); // Limpiar el formulario
});

// Evento para resetear las reseñas
document.getElementById('resetReviews').addEventListener('click', function () {
    localStorage.removeItem('reviews'); // Borrar reseñas del almacenamiento local
    loadReviews(); // Limpiar la lista de reseñas en la página
});

// Cargar reseñas al inicio
loadReviews();
