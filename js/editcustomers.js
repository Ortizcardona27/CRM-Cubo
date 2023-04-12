// import { writeFile } from 'node:fs';

var urlParams = new URLSearchParams(window.location.search);
var identificationDocument = urlParams.get("identificationDocument");
var documentType = urlParams.get("documentType");
var nameCustomer = urlParams.get("nameCustomer");
var lastName = urlParams.get("lastName");
var city = urlParams.get("city");
var country = urlParams.get("country");
var phone = urlParams.get("phone");
var email = urlParams.get("email");
var address = urlParams.get("address");

document.getElementById("identificationDocument").value = identificationDocument;
document.getElementById("documentType").value = documentType;
document.getElementById("nameCustomer").value = nameCustomer;
document.getElementById("lastName").value = lastName;
document.getElementById("city").value = city;
document.getElementById("country").value = country;
document.getElementById("phone").value = phone;
document.getElementById("email").value = email;
document.getElementById("address").value = address;

// function RegisterCase(caseNumber, subjectEdit, customer, state, description, attendant) {
//     debugger;
//     const cases = caseNumber.value + '|' + subjectEdit.value + '|' + customer.value + '|' + state.value
//         + '|' + description.value + '|' + attendant.value;

//     const filePath = '.BD/casos.txt';

//     writeFile(filePath, cases, function (err) {
//         if (err) {
//             console.error(err);
//         }
        
//         alert("the case was successfully registered")
//         window.location = "home.html";
//         console.log('File saved correctly.');
//     });
// }