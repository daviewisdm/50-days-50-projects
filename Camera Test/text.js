const image = document.querySelector('img');
input = document.querySelector('img');

input = addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});