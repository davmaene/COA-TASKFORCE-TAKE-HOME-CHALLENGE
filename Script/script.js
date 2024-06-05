// this event is laucnhed when the dom is ready or finished tobe loaded
document.onload(() => {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        // handle event on mouse is hovering the image
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('img');
            img.classList.add('blur');
            console.log(`The Hovered over action detected ${item.dataset.title}`);
        });
    });
})
