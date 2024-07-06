AOS.init({
    once: false
});
 const imgElement = document.getElementById('imageChange');

    imgElement.addEventListener('mouseover', () => {
        imgElement.src = './assets/images/tesst.jpg'; // Replace with your hover image path
    });

    imgElement.addEventListener('mouseout', () => {
        imgElement.src = './assets/images/cme.jpg'; // Original image path
    });

