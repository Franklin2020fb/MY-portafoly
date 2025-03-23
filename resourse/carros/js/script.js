// 1. cambiamos el color del car y addtocart button el color es seleccionado
// - Seleccionamos los elementos
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const graycolor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button")
const itemTag = document.getElementsByTagName("h3")[0];
// Modificando Elementos 
// - Add Event listeners
// - Red Color

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
});

graycolor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});

// - Cart Button
const Cart = () => {
   cartButton.style.display = "none";
   feedbackBtn.style.display = "block"; 
};
cartButton.addEventListener("click", Cart);

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none"; 
 };
 feedbackBtn.addEventListener("click", feedback);
 