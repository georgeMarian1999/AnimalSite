var slideindex = 0;
var animals = [
  {
    name: "Rex",
    type: "dog",
    pets: 3,
  },
  {
    name: "Lucky",
    type: "dog",
    pets: 0,
  },
  {
    name: "Luna",
    type: "cat",
    pets: 2,
  },
];
function load() {
  let animals = JSON.parse(localStorage.getItem("animals"));
  if(animals){
    for (let i = 0; i < animals.length; i++) {
      createAnimal(animals[i]);
    }
    enablePrevNextButtons();
  }
  else {
    createNoAnimalsMessage();
  }
}
function createNoAnimalsMessage(){
  let template = document.querySelector("#noAnimalsItem");
  let clone = template.content.cloneNode(true);
  let li = clone.querySelector(".sliderItem ");
  document.querySelector("#slider").appendChild(li);
  let nextButton = document.querySelector("#nextButton");
  let prevButton = document.querySelector("previousButton");
  console.log(nextButton.querySelector("a"));
  //document.querySelector("#nextButton").querySelector("a").toggle("disabled",true);
  //document.querySelector("#previousButton").querySelector("a").toggle("disabled",true);
}
function enablePrevNextButtons(){
  let nextButton = document.querySelector("#nextButton");
  let prevButton = document.querySelector("previousButton");
  //document.querySelector("#nextButton").querySelector("a").toggle("disabled",false);
  //document.querySelector("#previousButton").querySelector("a").toggle("disabled",false);
}
function shake(icon) {
  icon.animate(
    [
      { transform: "translateX(0px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(0px)" },
    ],
    {
      duration: 400,
      iterations: 2,
    }
  );
}
function nod(element){
  console.log(element);
  element.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(15px)" },
      { transform: "translateY(-15px)" },
      { transform: "translateY(0px)" },
    ],
    {
      duration: 400,
      iterations: 2,
    }
  );
}
function pet() {
  let animals = JSON.parse(localStorage.getItem("animals"));
  animals[slideindex].pets += 1;
  localStorage.setItem("animals",JSON.stringify(animals));
  let listItem = document.getElementsByClassName("sliderItem")[slideindex];
  listItem.querySelector("#numberPets").innerHTML = "Number of pets: " + animals[slideindex].pets;
  animals[slideindex].type === "dog" ? document.querySelector("#dogSound").play() : document.querySelector("#catSound").play();
  shake(document.querySelector("li.shown .animalIcon"));
  //nod(document.querySelector("li.shown div.content .head"));
  //animals[slideindex].type === "dog" ? nod(document.querySelector(".head")) : nod(document.querySelector(".head"));
  //nod(document.querySelector(".crtHead"));
  document.querySelector("li.shown #animatedText").style.display = "block";
  setTimeout(function () {
    document.querySelector("li.shown #animatedText").style.display = "none";
  }, 2500);
}
function checkName() {
  if (document.getElementById("animalName").value.length >= 3) {
    document.getElementById("saveButton").disabled = false;
  } else document.getElementById("saveButton").disabled = true;
}
function createAnimal(animal){
  let template;
  template = document.querySelector("#animalItem");
  //animal.type === "dog" ? template = document.querySelector("#animalItemSVGDog") : template = document.querySelector("#animalItemSVGCat");
  let clone = template.content.cloneNode(true);
  let li = clone.querySelector(".sliderItem");
  let div = li.querySelector(".content");
  let name = div.querySelector("#h4Name");
  name.innerHTML = animal.name;
  let iconWrapper = div.querySelector("#iconTextWrapper");
  

  let icon = iconWrapper.querySelector(".animalIcon");
  animal.type === "dog" ? icon.classList.add("fa-dog") : icon.classList.add("fa-cat"); 
  let animatedText = iconWrapper.querySelector("#animatedText");
  animal.type === "dog" ? animatedText.innerHTML = "Ham!" : animatedText.innerHTML = "Miaw!";
  let numberPets = div.querySelector("#numberPets");
  numberPets.innerHTML="Number of pets :" + animal.pets
  document.querySelector("#slider").appendChild(li);

}
// function createAnimal(animal) {
//   var content = document.createElement("DIV");
//   content.classList.add("content");
//   var h4 = document.createElement("H4");
//   h4.innerHTML = animal.name;
//   var li = document.createElement("li");
//   li.classList.add("sliderItem");
//   content.appendChild(h4);
//   let animatedText = document.createElement("div");
//   animatedText.classList.add("animatedText")
//   var icon = document.createElement("i");
//   icon.classList.add("fas", "animalIcon");
//   if (animal.type === "dog") {
//     animatedText.innerHTML = "Ham!"
//     icon.classList.add("fa-dog");
//   } else {
//     animatedText.innerHTML = "Miaw!"
//     icon.classList.add("fa-cat");
//   }
//   content.appendChild(icon);
//   content.appendChild(animatedText);
//   var pets = document.createElement("h4");
//   pets.innerHTML = "Number of pets: " + animal.pets;
//   content.appendChild(pets);
//   li.appendChild(content);
//   document.getElementById("slider").appendChild(li);
// }
function addAnimal() {
  document.getElementById("home").style.opacity = "0.2";
  document.getElementById("addModal").style.display = "block";
}
function closeModal() {
  document.getElementById("addModal").style.display = "none";
  document.getElementById("animalName").value = "";
  document.getElementById("home").style.opacity = "1";
}
function saveAnimal() {
  let animals = JSON.parse(localStorage.getItem("animals"));
  if(!animals){
    animals = [];
    document.querySelector("#slider").innerHTML = "";
  }
  let select = document.getElementById("typeSelect");
  const animal = {
    name: document.getElementById("animalName").value,
    type: select.options[select.selectedIndex].value,
    pets: 0,
  };
  animals.push(animal);
  localStorage.setItem("animals", JSON.stringify(animals));
  createAnimal(animal);
  closeModal();
  
}
document.addEventListener("DOMContentLoaded", function c() {
  load();
   //localStorage.clear();
  //localStorage.setItem("animals", JSON.stringify(animals));
  nextAnimal();
});
function nextSlide() {
  slideindex++;
  nextAnimal();
}
function previousSlide() {
  slideindex--;
  nextAnimal();
}

function nextAnimal() {
  let listItems = document.getElementsByClassName("sliderItem");
  //document.querySelector("li .head").classList.toggle("crtHead",false);
  slideindex = (slideindex + listItems.length) % listItems.length;
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("shown", i === slideindex);
    
  }
  //document.querySelector("li.shown .head").classList.toggle("crtHead",true);
}
