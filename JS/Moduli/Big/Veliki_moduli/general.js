
function generateImage() {
    let img = document.createElement(`img`);
    img.style.width = `400px`;
    img.style.height = `300px`;
    console.log(img);
    return img;
}

// export {generateImage};
export default generateImage;