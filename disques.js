// Indices actuels de chaque carrousel
let currentIndices = [0, 0, 0]; // Un index pour chaque carrousel

// Fonction pour passer à la slide suivante dans le carrousel correspondant
function nextSlide(carrouselIndex) {
    const carrousels = document.querySelectorAll('.carrousel');
    const carrousel = carrousels[carrouselIndex];
    const totalItems = carrousel.querySelectorAll('.carrousel-item').length;

    // Augmente l'indice pour passer à l'élément suivant
    currentIndices[carrouselIndex]++;

    // Si l'indice dépasse le nombre d'éléments, revient au début
    if (currentIndices[carrouselIndex] >= totalItems) {
        currentIndices[carrouselIndex] = 0;
    }

    // Applique la transformation pour faire défiler les éléments
    carrousel.style.transform = `translateX(-${currentIndices[carrouselIndex] * 100}%)`;
}

// Fonction pour revenir à la slide précédente dans le carrousel correspondant
function prevSlide(carrouselIndex) {
    const carrousels = document.querySelectorAll('.carrousel');
    const carrousel = carrousels[carrouselIndex];
    const totalItems = carrousel.querySelectorAll('.carrousel-item').length;

    // Diminue l'indice pour revenir à l'élément précédent
    currentIndices[carrouselIndex]--;

    // Si l'indice devient inférieur à 0, revient à la fin
    if (currentIndices[carrouselIndex] < 0) {
        currentIndices[carrouselIndex] = totalItems - 1;
    }

    // Applique la transformation pour faire défiler les éléments
    carrousel.style.transform = `translateX(-${currentIndices[carrouselIndex] * 100}%)`;
}

// Gérer la recherche dans les produits
document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const items = document.querySelectorAll('.carrousel-item');

    items.forEach(item => {
        const productName = item.getAttribute('data-name').toLowerCase();

        if (productName.includes(searchValue)) {
            item.style.display = ''; // Afficher l'élément correspondant à la recherche
        } else {
            item.style.display = 'none'; // Masquer l'élément non correspondant
        }
    });
});
