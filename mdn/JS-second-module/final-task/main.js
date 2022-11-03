const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const src = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt = ['Zoomed part of face with eye', 'marble pattern like waves', 'purple and white flowers', 'egyptian arts on wall', 'big brown butterfly'];

/* Looping through images */
for (const path of src) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${src[src.indexOf(path)]}`);
    newImage.setAttribute('alt', alt[src.indexOf(path)]);
    thumbBar.appendChild(newImage);

}

thumbBar.addEventListener('click', (e) => {

    const newSrc = e.target.getAttribute('src');
    const newAlt = e.target.getAttribute('alt'); 
    displayedImage.setAttribute('src', newSrc);
    displayedImage.setAttribute('alt', newAlt);

})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {

     if (btn.getAttribute('class') === 'dark') {

        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        btn.textContent = 'Lighten';

    } else {

        btn.setAttribute('class', 'dark')
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn.textContent = 'Darken';
    }


//     JUST TO PRACTICE: this code is a 2nd way to make Darken/Lighten button work, but in the case if we don't have access to class attribute 
/*           
switch (overlay.style.backgroundColor) {
    case 'rgba(0, 0, 0, 0)':
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        btn.textContent = 'Lighten'
        break;

    case 'rgba(0, 0, 0, 0.5)':
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn.textContent = 'Darken';
        break;

    default:
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        btn.textContent = 'Lighten';
} */
});