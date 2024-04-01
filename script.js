const count = 10;
const apiKey = "tx9bfg4V6fJdfjtDEKUCJ9ycT-a-OfapS0DB_3c0-yE"
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

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