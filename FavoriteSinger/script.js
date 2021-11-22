const images = document.querySelector(".images");

const arrImg = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/Infinite.jpg/220px-Infinite.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f9/The_Slim_Shady_LP.jpg/220px-The_Slim_Shady_LP.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/The_Marshall_Mathers_LP.jpg/220px-The_Marshall_Mathers_LP.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/The_Eminem_Show.jpg/220px-The_Eminem_Show.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Encore_%28%C3%A1lbum%29.jpg/220px-Encore_%28%C3%A1lbum%29.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b9/Relapse.jpg/220px-Relapse.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1e/Eminem_-_Recovery.jpg/220px-Eminem_-_Recovery.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Capa_de_The_Marshall_Mathers_LP_2.jpg/220px-Capa_de_The_Marshall_Mathers_LP_2.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a5/Eminem_-_Revival.jpg/220px-Eminem_-_Revival.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/3/37/Capa_de_Kamikaze_%28Eminem%29.jpg/220px-Capa_de_Kamikaze_%28Eminem%29.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Eminem_-_Music_to_Be_Murdered_By.png/220px-Eminem_-_Music_to_Be_Murdered_By.png"
]


//Trabalhando com as imagens do Album
const image = [];
setAtual();
setInterval(update, 1500);

function setAtual(){
    arrImg.forEach(function(item, index, array){
        image.push(document.createElement("img"));
        image[index].src = item;
        images.appendChild(image[index]);
    });
}

function update(){
    let first = arrImg[0];
    arrImg.shift();
    arrImg.push(first);
    setAtual();
}