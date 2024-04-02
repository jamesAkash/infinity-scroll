const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 10;
const apiKey = "tx9bfg4V6fJdfjtDEKUCJ9ycT-a-OfapS0DB_3c0-yE"
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes to element
function setAttributes(element,attributes){
    for(let key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

// Create elements for Links and Photos and add to dom
function displayPhotos(){
    // Run function for each obj
    photosArray.forEach((photo)=>{
        // Create <a> to undplash
        const item = document.createElement('a');
       setAttributes(item,{
        href:photo.links.html,
        target:"_blank"
       })
        // Create img
        const img = document.createElement("img");
        setAttributes(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })
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

// Check to see if near bottom of page
window.addEventListener('scroll',()=>{{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -1000 ){
       getPhotos();
    }
}})

getPhotos()