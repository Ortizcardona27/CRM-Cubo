/*const fs = require('fs');

function RegisterCase(subject, caseType, name, phone, email) {

    const cases = subject.value + '|' + caseType.value + '|' + name.value + '|' + phone.value
        + '|' + email.value + '|' + acceptTerms.value;

    const filePath = '.BD/casos.txt';

    fs.writeFile(filePath, cases, function (err) {
        if (err) {
            console.error(err);
        }
        
        alert("the case was successfully registered")
        window.location = "home.html";
        console.log('Archivo guardado correctamente.');
    });
}
*/

//const gridContainer = document.getElementById("grid-container-customers");

// Crea 9 elementos div para cada celda del grid
/*for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Agrega una clase para estilos adicionales
    gridContainer.appendChild(cell);
}*/

//const cells = document.querySelectorAll(".cell"); // Obtiene todos los elementos div con clase "cell"

const file = "./BD/clientes.txt"
const rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onload = function () {
    var allText = rawFile.responseText;
    table = document.getElementById("tableCustomers");
    var allLine = allText.split("\n");
    //console.log(allLine);

    for (let i = 0; i < allLine.length; i++) {

        var lineCase = allLine[i].split("|");
        let tr = table.insertRow();
        let td = tr.insertCell();

        for (let j = 0; j < lineCase.length; j++) {
            //const cellIndex = j; // Calcula el índice de la celda correspondiente
            //const cell = cells[j];
            //cell.textContent = lineCase[j].trim();
            console.log(lineCase[j]);
            td = tr.insertCell();
            td.innerHTML = lineCase[j].trim();
        }

        if (i != 0) {
            td = tr.insertCell();
            td.innerHTML = `<input type="button" value="Edit" onclick= "Editar('${lineCase}')">`;
        } 

        console.log(lineCase);
    }
}
rawFile.send(null);

function Editar(row) {

    var rowByArray = row.split(",");
    var params = new URLSearchParams();
    
    params.append("identificationDocument", rowByArray[0]);
    params.append("documentType", rowByArray[1]);
    params.append("nameCustomer", rowByArray[2]);
    params.append("lastName", rowByArray[3]);
    params.append("city", rowByArray[4]);
    params.append("country", rowByArray[5]);
    params.append("phone", rowByArray[6]);
    params.append("email", rowByArray[7]);
    params.append("address", rowByArray[8]);
    
    var url = "editCustomers.html?";
    url += params.toString();
    window.location.href = url;
}


document.getElementById("identificationDocument").value = identificationDocument;
document.getElementById("documentType").value = documentType;
document.getElementById("nameCustomer").value = nameCustomer;
document.getElementById("lastName").value = lastName;
document.getElementById("city").value = city;
document.getElementById("country").value = country;
document.getElementById("phone").value = phone;
document.getElementById("email").value = email;
document.getElementById("address").value = address;
    //const randomNumber = Math.floor(Math.random() * 9) + 1; // Genera un número aleatorio entre 1 y 9
    //cell.textContent = randomNumber; // Asigna el número como contenido del div