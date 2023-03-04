let person = {
    firstName: "John",
    lastName: "Johnlu",
    age: 50,
    score: 98.7,
    cars: [
        { vendor: "Ford", model: "Mustang" },
        { vendor: "Chevrolet", model: "Malibu" },
        { vendor: "Ferrari", model: "F12 Berlinetta" }
    ],
    Fullname: function () {
        return this.firstName + " " + this.lastName;
    }
}

let demo = document.getElementById("demo");

// console.log(person.Fullname());
// demo.innerHTML =person.Fullname();

// delete person.firstName;

// person["firstName"] = "Ayxan";

// person.cars.push({vendor:"Mercedes", model:"GL-500"});

// console.log(person);
// demo.innerHTML =person.Fullname();

// let content = "";

// for (let key in person) {
//     if (key != 'cars' && key != 'Fullname') {
//         content += `<li><h1>${key + " : " + person[key]}</h1></li>`
//     }
//     else if (key=='cars'){
//         content+=`<li><h1>CARS</h1>
//         <ul>`;
//         let mycars = person.cars;
//         mycars.forEach((car) =>{
//             content += `<li> 
//             ${car.model + "  -  "+car.vendor}</li>`;
//         });
//         content += `<ul>`;

//     }
// }

// let demo2 = document.getElementById("demo2");
// demo2.innerHTML = content;

// class Student{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     fullname()
//     {
//         return this.name + " " + this.surname;
//     }

//     static hello(){
//         alert("Hello!");
//     }
// }

// let student = new Student("Mike", "Memmedov");
// console.log(student);
// console.log(student.name);
// console.log(student.surname);
// console.log(student.fullname());
// Student.hello();

// function changeAll(){
//     let elements = document.getElementsByTagName("h1");
//     for(let e in elements){
//         e.style.color = "red";
//     }
// }

// function set(){
//     let first = document.querySelector("h1");
//     first.style.color = "red";

//     let all = document.querySelectorAll("h1");
//     all.forEach((e) =>{
//         e.style.color = "red";
//     })
// }

// set();

// const h1Elements = document.querySelectorAll('h1');

// function changeSizeAnimation(element, newFontSize, add = true) {
//     var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
//     var animation = setInterval(function () {

//         if (add) {
//             if (currentFontSize < newFontSize) {
//                 currentFontSize += 1;
//                 element.style.fontSize = currentFontSize + "px";
//             }
//             else {
//                 clearInterval(animation);
//             }
//         }
//         else {
//             if (currentFontSize > newFontSize) {
//                 currentFontSize -= 1;
//                 element.style.fontSize = currentFontSize + "px";
//             }
//             else {
//                 clearInterval(animation);
//             }
//         }

//     }, 10);
// }

// function handleClick(event) {
//     var element = event.target;
//     changeSizeAnimation(element, 54);
//     resetFontSizes();
// }

// function resetFontSizes() {
//     h1Elements.forEach(function (h1Element) {
//         changeSizeAnimation(h1Element, 34, false);
//     });
// }

// resetFontSizes();
// h1Elements.forEach(function (h1Element) {
//     h1Element.addEventListener('click', handleClick);
// });


// let myTitle = document.querySelector("h1");
// let element = document.createElement("h2");
// element.innerHTML="Hi Guys";
// myTitle.appendChild(element);
// setTimeout(() =>{
//     myTitle.removeChild(element);
// },2000);

// let myTitle = document.getElementById("myTitle");

// window.addEventListener("resize", function () {
//     document.getElementById("myTitle").innerHTML = `${this.window.outerWidth} ${this.window.outerHeight}`;
//     if (this.window.outerWidth >= 1000) {
//         myTitle.addEventListener("click", function () {
//             this.style.color = "red";
//         });
//     }
// });


let newElementName = document.getElementById("elementNameInput");
let newElementContent = document.getElementById("elementContentInput");
let selectedElement = document.getElementById("body");

function createNewElement() {
    var z = document.createElement(newElementName.value);
    z.innerHTML = newElementContent.value;
    selectedElement.appendChild(z);

    // z.addEventListener('click', (el) => {
    //     selectedElement = el;
    // });
}