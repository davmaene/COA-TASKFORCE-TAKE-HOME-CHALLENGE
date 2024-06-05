// this event is laucnhed when the dom is ready or finished to load
document.onload(() => {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        // handle event on mouse is hovering the image
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('img');
            img.classList.add('blur');
            console.log(`The Hovered over action detected ${item.dataset.title}`);
        });

        // handle event when the mouse leave the image
        item.addEventListener('mouseout', () => {
            const img = item.querySelector('img');
            img.classList.remove('blur');
            console.log(`The Mouse left the image ${item.dataset.title}`);
        });
    });
})
