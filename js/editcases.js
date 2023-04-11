// import { writeFile } from 'node:fs';

var urlParams = new URLSearchParams(window.location.search);
var caseNumber = urlParams.get("CaseNumber");
var affair = urlParams.get("Affair");
var customer = urlParams.get("Customer");
var state = urlParams.get("State");
var attendant = urlParams.get("Attendant");

document.getElementById("caseNumber").value = caseNumber;
document.getElementById("description").value = affair;
document.getElementById("customer").value = customer;
document.getElementById("state").value = state;
document.getElementById("attendant").value = attendant;
document.getElementById("subjectEdit").value = affair;

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