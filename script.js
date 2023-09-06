var allStudents = [];
var newIndex = 0;

function register() {
    display.innerHTML = "";

    display.innerHTML += `
    <table class="table" id="myTable">
        <tr class="table-secondary">
        <th>S/N</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    `

    for (let index = 0; index < allStudents.length; index++) {
        
        myTable.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${allStudents[index].fName}</td>
        <td>${allStudents[index].lName}</td>
        <td>${allStudents[index].mail}</td>
        <td>
        <button onclick="deleteOne(${index})" class="btn btn-danger m-2 deletebutton"><i class="fa-solid fa-trash-can"></i></button>
        <button onclick="edit(${index})" class="btn btn-warning editbutton" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen"></i></button>


        </td>
        </tr>
        `

    }

    display.innerHTML += `</table>`;

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

}



function signUp() {

    var student = {
        fName: firstName.value,
        lName: lastName.value,
        mail: email.value,
        psw: password.value
        }

    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {

        alert("Kindly Enter Student Information");

    } else{

    allStudents.push(student);

    register();
        }

}

function deleteOne(index) {

    allStudents.splice(index, 1);

    register();

}

function edit(index) {
    newIndex += index;
}


function updateInfo(index) {

    var student = {
    fName: newFName.value,
    lName: newLName.value,
    mail: newEmail.value,
    psw: newPassword.value
    }

    allStudents.splice(newIndex, 1, student);

    register();

    newFName.value = "";
    newLName.value = "";
    newEmail.value = "";
    newPassword.value = "";
}
