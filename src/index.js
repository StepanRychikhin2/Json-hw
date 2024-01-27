import students from "./students.json" assert { type: "json" };

const add = document.querySelector("#add");
const edit = document.querySelector("#edit");
const del = document.querySelector("#del");
const submit = document.querySelector("#submit");
const modil = document.querySelector(".modil");
const info = document.querySelectorAll(".card");
const list = document.querySelector(".list");
const title = document.querySelector("#title");
let index = -1;
let json = students;

function reloadCards(arr) {
    for (const i of info) {
      i.value = "";
    }
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="item" id="${i}">
                <p>Name: ${arr[i].name}</p>
                <p>Surname: ${arr[i].surname}</p>
                <p>Age: ${arr[i].age}</p>
                <p>Course: ${arr[i].course}</p>
                <p>Faculty: ${arr[i].faculty}</p>
            </li>`
      );
    }
}



add.addEventListener("click", () => {
    title.textContent = "Add Card";
    modil.classList.remove("cliose");
});
let cardList = [];

del.addEventListener("click", () => {
    const cards = document.querySelectorAll(".item");
    for (const i of cards) {
        // i.classList.add("hov");
        i.addEventListener("click", () => {
            index = i.id;
            cardList.splice(index, index + 1);
            reloadCards(cardList);
            json = JSON.stringify(cardList);
            console.log(json);
        });
    }
});



edit.addEventListener("click", () => {
    const cards = document.querySelectorAll(".item");
    for (const i of cards) {
        i.addEventListener("click", () => {
            title.textContent = "Edit Card";
            modil.classList.remove("cliose");
            index = i.id;
        });
    }
});



submit.addEventListener("click", (e) => {
    e.preventDefault();
    modil.classList.add("cliose");
    if (
      info[0].value,
      info[1].value,
      info[2].value,
      info[3].value,
      info[4].value
    ) {
        if (title.textContent === "Add Card") {
        cardList.push({
          name: info[0].value,
          surname: info[1].value,
          age: info[2].value,
          course: info[3].value,
          faculty: info[4].value,
        });
      } else if (title.textContent === "Edit Card") {
        const cards = document.querySelectorAll(".item");
        cardList[index] = {
          name: info[0].value,
          surname: info[1].value,
          age: info[2].value,
          course: info[3].value,
          faculty: info[4].value,
        };
        }
        json = JSON.stringify(cardList);
        console.log(json);
    }
    else {
       alert("Заповніть поля всі")
    }
    reloadCards(cardList);
});



