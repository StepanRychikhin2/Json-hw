// import data from "./students.json";

const nameInput = document.querySelector("#nameInput");
const surnameInput = document.querySelector("#surnameInput");
const ageInput = document.querySelector("#ageInput");
const kursInput = document.querySelector("#kursInput");
const sumbitBtn = document.querySelector("#sumbitBtn");
const listBtn = document.querySelector("#listBtn");



function fetchStudents() {

}

sumbitBtn.addEventListener("click", addStudent)

function addStudent() {
    const information = {
        name: nameInput.value,
        surname: surnameInput.value,
        ageInput: ageInput.value,
        kursInput: kursInput.value
    };
    const ADDjson = JSON.stringify(information);
    console.log(ADDjson);


}

listBtn.addEventListener("click", updateStudent)

function updateStudent() {


}


function deleteStudent(studentId) {
  
}

