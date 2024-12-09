// Comparar Números
const compareNumbers = () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = document.getElementById('compareResult');
    if (num1 > num2) {
        result.textContent = `El mayor es ${num1}`;
    } else if (num2 > num1) {
        result.textContent = `El mayor es ${num2}`;
    } else {
        result.textContent = 'Ambos números son iguales';
    }
};

// Mostrar Mes
const getMonth = () => {
    const monthInput = parseInt(document.getElementById('monthInput').value);
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    switch (monthInput) {
        case 1:
            alert(months[0]);
            break;
        case 2:
            alert(months[1]);
            break;
        case 3:
            alert(months[2]);
            break;
        case 4:
            alert(months[3]);
            break;
        case 5:
            alert(months[4]);
            break;
        case 6:
            alert(months[5]);
            break;
        case 7:
            alert(months[6]);
            break;
        case 8:
            alert(months[7]);
            break;
        case 9:
            alert(months[8]);
            break;
        case 10:
            alert(months[9]);
            break;
        case 11:
            alert(months[10]);
            break;
        case 12:
            alert(months[11]);
            break;
        default:
            alert("Número inválido");
    }
};

// Gestión de Nombres
const names = [];
const addName = () => {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        names.push(nameInput);
        document.getElementById('nameList').textContent = names.join(', ');
    }
};

// Registrar Usuario
const registerUser = () => {
    const userID = document.getElementById('userID').value;
    const cedula = document.getElementById('cedula').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;

    if (!userID || !cedula || !name || !dob || !city) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    const cedulaPattern = /^[0-9]{10}$/;
    if (!cedulaPattern.test(cedula)) {
        alert("La cédula debe ser un número de 10 dígitos.");
        return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    if (birthDate > today) {
        alert("La fecha de nacimiento no puede ser futura.");
        return;
    }

    const tableBody = document.querySelector('#userTable tbody');
    const newRow = document.createElement('tr');
    const fields = ['userID', 'cedula', 'name', 'dob', 'city'];
    fields.forEach(field => {
        const cell = document.createElement('td');
        cell.textContent = document.getElementById(field).value;
        newRow.appendChild(cell);
    });
    tableBody.appendChild(newRow);
    document.getElementById('userForm').reset();
};

