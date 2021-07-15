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
  for (let i = 0; i < animals.length; i++) {
    createAnimal2(animals[i]);
  }
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
function pet() {
  let animals = JSON.parse(localStorage.getItem("animals"));
  animals[slideindex].pets += 1;
  localStorage.setItem("animals",JSON.stringify(animals));
  var listItem = document.getElementsByClassName("sliderItem")[slideindex];
  listItem.lastChild.lastChild.innerHTML = "Number of pets: " + animals[slideindex].pets;
  if(animals[slideindex].type === "dog"){
    document.getElementById("dogSound").play();
  }
  else document.getElementById("catSound").play();
  let icon = document.querySelector("li.shown .animalIcon");
  shake(icon);

  document.querySelector("li.shown .animatedText").style.display = "block";
  setTimeout(function () {
    document.querySelector("li.shown .animatedText").style.display = "none";
  }, 2500);
}
function checkName() {
  if (document.getElementById("animalName").value.length >= 3) {
    document.getElementById("saveButton").disabled = false;
  } else document.getElementById("saveButton").disabled = true;
}
function createAnimal2(animal){
  let template = document.querySelector("#animalItem");
  let clone = template.content.cloneNode(true);
  let li = clone.querySelector(".sliderItem");
  console.log( li.childNodes[1].childNodes);
  li.childNodes[1].childNodes[1].innerHTML = animal.name;
  animal.type === "dog" ? li.childNodes[1].childNodes[3].classList.add("fa-dog") : li.childNodes[1].childNodes[3].classList.add("fa-cat"); 
  li.childNodes[1].childNodes[5].innerHTML="Number of pets :" + animal.pets
  document.getElementById("slider").appendChild(li);

}
function createAnimal(animal) {
  var content = document.createElement("DIV");
  content.classList.add("content");
  var h4 = document.createElement("H4");
  h4.innerHTML = animal.name;
  var li = document.createElement("li");
  li.classList.add("sliderItem");
  content.appendChild(h4);
  let animatedText = document.createElement("div");
  animatedText.classList.add("animatedText")
  var icon = document.createElement("i");
  icon.classList.add("fas", "animalIcon");
  if (animal.type === "dog") {
    animatedText.innerHTML = "Ham!"
    icon.classList.add("fa-dog");
  } else {
    animatedText.innerHTML = "Miaw!"
    icon.classList.add("fa-cat");
  }
  content.appendChild(icon);
  content.appendChild(animatedText);
  var pets = document.createElement("h4");
  pets.innerHTML = "Number of pets: " + animal.pets;
  content.appendChild(pets);
  li.appendChild(content);
  document.getElementById("slider").appendChild(li);
}
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
  let select = document.getElementById("typeSelect");
  const animal = {
    name: document.getElementById("animalName").value,
    type: select.options[select.selectedIndex].value,
    pets: 0,
  };
  animals.push(animal);
  localStorage.setItem("animals", JSON.stringify(animals));
  createAnimal2(animal);
  closeModal();
}
document.addEventListener("DOMContentLoaded", function c() {
  load();
  // localStorage.clear();
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
  var listItems = document.getElementsByClassName("sliderItem");
  slideindex = (slideindex + listItems.length) % listItems.length;
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("shown", i === slideindex);
  }
}
