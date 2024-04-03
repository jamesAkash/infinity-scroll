# Infinite Scroll Implementation

### Description

### Resources

1. loader svg - [loading.io](https://loading.io/)
2. Api - [unsplash](https://unsplash.com/)

### bits

1. Adding the svg using the img tag

<img src="/assets/loader.svg" alt="loader">

2. Font 

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

3. passing hidden directly to html elements
    <div class="loader" id="loader" hidden>

```
/* Loader */
.loader{
  position: fixed; /*Make it fixed even if user scrolls*/
  /* To cover the entire screen */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

.loader img{
  position: fixed;
  top: 50%;
  left: 50%;
  /* This will force center it regardless of the size(starting point of width) */
  transform: translate(-50%,-50%);
}
```

4. Fetch data
```
//Get photos from unspalsh API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

getPhotos()
```

5. Creating Helper functions(for inserting to DOM) to follow DRY concept

```
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
```

6. Scroll Implementation, Scroll Event

-> If
window.innerHeight + window.scrollY > document.body.offsetY - 1000

//Here scrollY gives scroll value with respect to top of the page.
//body.offSetY gives the height of entire content ie which are not even in view

-> Do something(In our case it is fetch more images)

7. load Event

// Check if images were loaded
function imageLoaded(){
    imagesLoaded += 1;
    if(imagesLoaded === totalImages){
    ready=true;
    loader.hidden = true;
    }
}

`img.addEventListener('load',imageLoaded)`
