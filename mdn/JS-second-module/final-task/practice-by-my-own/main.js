const bigImage = document.querySelector('.displayed-pick');
const tumbBar = document.querySelector('.tumb-nail');
const btn = document.querySelector('button');
const mode = document.querySelector('.fillter');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alt = ['Zoomed part of face with eye', 'marble pattern like waves', 'purple and white flowers', 'egyptian arts on wall', 'big brown butterfly'];

for (const picture of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `../images/${images[images.indexOf(picture)]}`);
newImage.setAttribute('alt', alt[images.indexOf(picture)]) 
tumbBar.appendChild(newImage);
}


tumbBar.addEventListener('click', (event) => {
    const path = event.target.getAttribute('src');
    const altText = event.target.getAttribute('alt');

    bigImage.setAttribute('src', path);
    bigImage.setAttribute('alt', altText); 
});      






btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        mode.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Darken';
        mode.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
})