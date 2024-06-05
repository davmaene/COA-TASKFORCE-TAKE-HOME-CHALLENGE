document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('img');
            img.classList.add('blur');
            console.log(`The Hovered over action detected ${item.dataset.title}`);
        });

        item.addEventListener('mouseout', () => {
            const img = item.querySelector('img');
            img.classList.remove('blur');
            console.log(`The Mouse left the image ${item.dataset.title}`);
        });
    });
});
