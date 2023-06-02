// let input = document.querySelector(".input");
// input.addEventListener("input", (evt) => {
//   push(evt.target.value);
// });

// function push(value) {
//   let parent = document.querySelector(".text");
//   parent.classList.add("myList");
//   parent.innerHTML = value;
//     localStorage.setItem("hgghghgh", 123);

//     let button = document.querySelector(".button")
//     button.addEventListener("click", (evt) => {
//         push(evt.target.value)
//     })

// }

//Для того чтобы мы выводили текст из инпута надо создать функцию
// // Сохраняем данные в localStorage
// // Написать функцию,которая выводит массив и выводит на страницу

// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const tasklist = document.querySelector(".myList");
// // const content = document.querySelector(".content");

// button.addEventListener("click", (event) => {
//   event.preventDefault();

//   const taskText = input.value;
//   console.log(taskText);

//   const taskHTML = `${taskText}`;

//   tasklist.insertAdjacentHTML("beforebegin", taskHTML);
// });

// const arr = [
//   { id: 1685525007737, text: "Buy chese", isDone: true },
//   { id: 1685525015660, text: "Walk", isDone: false },
//   { id: 1685525027216, text: "Some todo", isDone: false },
//   { id: 1685525035428, text: "And another todo", isDone: true },
//   { id: 1685525042973, text: "123", isDone: false },
//   { id: 1685525046506, text: "Hello js", isDone: false },
// ];

//1. Очистить массив (удалить все).
//2. Изменить isDone на !isDone, по id.
//3. Удалbть те, у которых isDone - true.
//4. Удалить объект по id.
//5. Добавть в массив новый объект.
//*6. Изменить text по id.

// const arr = [];

// function change(id) {
//   const todo = arr.find((elem) => elem.id === id);
//
//     todo.isDone = !todo.isDone;
//
// }
// change(1685525007737);
// console.log(arr);

// function deleted(arr) {
//   const filt = arr.filter((elem) => !elem.isDone);
//   console.log(filt)
// }
// deleted(arr);

// function deletedTwo(id) {
//   const del = arr.filter((elem) => elem.id !== id)
//   console.log(del);
// }
// deletedTwo(1685525007737);s

// function add(arr) {
//   arr.push({})
// }
// add(arr)
// console.log(arr)

// function change(id, text) {
//   const myId = arr.find((elem) => elem.id === text)
//   myId.text = "fjfjjf"
//    console.log(myId)
// }
// change(1685525007737);
// console.log(arr);

let array = [];
let wrapper = document.querySelector(".wrapper");
let button = document.querySelector(".button");
let myList = document.querySelector(".myList");
let input = document.querySelector(".input");
let button_compleated = document.querySelector(".delete_but");
let button_deleteAll = document.querySelector(".deleteAll_but");

let form = document.querySelector(".form");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // const myText = input.value;
  array.push({
    id: Date.now(),
    text: input.value,
    isDone: false,
  });
  input.value = "";
  input.focus();
  console.log(array);
  wrapper.innerHTML = "";
  myForech();
  localStorage.setItem("array.", JSON.stringify(array));
});

// function createCards(array) {
//   array.forEach((element) => {
//     let parent = document.createElement("div");
//     parent.classList.add(".wrapper");

//     let inputCheck = document.createElement("input");
//     inputCheck = element;
//     inputCheck.classList.add(".checkbox");

//     let myText = document.createElement("p");
//     myText.innerText = element.array;
//     myText.classList.add(".text");

//     let myButton = document.createElement("button");
//     myButton.innerText = element;
//     myButton.classList.add(".redKrest");

//     parent.append(inputCheck);
//     parent.append(myText);
//     parent.append(myButton);
//     array.append(parent)
//   });
// }
// console.log(createCards(myText));

const drowToDo = (obj) => {
  const li = document.createElement("li");
  li.classList.add("myLi");
  li.innerHTML = `<input class = "checkbox" type = "checkbox" >
    <span class = "mySpan">${obj.text}</span>
  <button class = "delAll_but">❌</button>`;
  const chk = li.querySelector(".checkbox");
  const del = li.querySelector(".delAll_but");

  chk.checked = obj.isDone;

  chk.addEventListener("change", () => changechk(obj.id));
  del.addEventListener("click", () => deletedTwo(obj.id));
  return li;
};

function changechk(id) {
  const todo = array.find((obj) => obj.id === id);
  todo.isDone = !todo.isDone;
}
// change(1685525007737);
// console.log(arr);

function deletedTwo(id) {
  array = array.filter((obj) => obj.id !== id);
  wrapper.innerHTML = "";

  myForech();
}
// deletedTwo(1685525007737);
function myForech() {
  wrapper.innerHTML = "";
  array.forEach((obj) => {
    wrapper.append(drowToDo(obj));
  });
}

function deleted() {
  array = array.filter((elem) => elem.isDone !== true);
  wrapper.innerHTML = "";
  myForech();
}
// deleted(array);

function clearAll() {
  array = [];
  wrapper.innerHTML = "";
}

button_compleated.addEventListener("click", deleted);
button_deleteAll.addEventListener("click", clearAll);
