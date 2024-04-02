const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 10;
const apiKey = "tx9bfg4V6fJdfjtDEKUCJ9ycT-a-OfapS0DB_3c0-yE"
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for Links and Photos and add to dom
function displayPhotos(){
    // Run function for each obj
    photosArray.forEach((photo)=>{
        // Create <a> to undplash
        const item = document.createElement('a');
        item.setAttribute("href",photo.links.html);
        item.setAttribute("target","_blank");
        // Create img
        const img = document.createElement("img");
        img.setAttribute("src",photo.urls.regular);
        img.setAttribute("alt",photo.alt_description);
        img.setAttribute("title",photo.urls.regular);
        // Put img inside <a> and put both inside imageContainer Element
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

//Get photos from unspalsh API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos()
    } catch (error) {
        console.log(error.message)
    }
}

getPhotos()