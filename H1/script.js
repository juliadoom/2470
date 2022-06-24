// create an object
let julia = {
  name: "Julia Dressman",
  age: 27,
  married: false,
  classes: [1410, 2440, 2470],
  hobbies: [
    {
      name: "Video Games",
      description: "Destiny 2, Civ VI, Genshin Impact",
    },
    {
      name: "Reading",
      description: "Song of Solomon, Girl with the Dragon Tattoo, Walden",
    },
  ],
};

//HTML Elements
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let classes = document.querySelector(".classes");
let married = document.querySelector(".married");
let hobbies = document.querySelector(".hobbies");
let load = document.querySelector(".loadJson");
let view = document.querySelector(".viewJson");
let raw = document.querySelector(".raw");

// Make JSON from Js Object
let json = JSON.stringify(julia);

let loadJson = async () => {
  let julia = JSON.parse(json);
  name.textContent = julia.name;
  age.textContent = julia.age;
  classes.textContent = julia.classes.map((n) => n.toString()).join(", ");
  married.textContent = julia.married;
  hobbies.textContent = Object.values(julia.hobbies[1]).join("(").concat(")");
};

//Update DOM
let viewJson = async () => {
  raw.classList.toggle("mystyle");
  raw.style.padding = "1rem";
  raw.style.margin = "1rem";
  raw.style.width = "40vw";
  //raw.style.backgroundColor = "#ffffff";
  //raw.style.border = "2px solid #cccccc";
  //raw.style.borderRadius = "3px";
  raw.setAttribute("contenteditable", "true");
  raw.style.overflow = "scroll";
  raw.textContent = json;
};

load.addEventListener("click", async () => loadJson());
view.addEventListener("click", async () => viewJson());