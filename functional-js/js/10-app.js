/**
 * Composition
 * Es escribir n funciones e ir utilizando tus objetos y todo lo que
 * requieras en tu codigo. 
 * Funciones que se pueden utilizar en diferentes objetos en lugar de crear clases 
 * o heredar.
*/

const getName = info => ({
    showName() {
        console.log(`Name: ${ info.name }`);
    }
});

const saveEmail = info => ({
    addEmail(email) {
        console.log('Save email in: ' + info.name);
        info.email = email;
    }
});

const getEmail = info => ({
    showEmail() {
        console.log(`Email: ${ info.email }`);
    }
});

const getCompany = info => ({
    showCompany() {
        console.log(`Company: ${ info.company }`);
    }
});

const getRole = info => ({
    showRole() {
        console.log(`Role: ${ info.role }`);
    }
});


function Client(name, email, company) {
    let info = { name, email, company };

    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getCompany(info)
    );
}

function Employee(name, email, role) {
    let info = { name, email, role };
    
    return Object.assign(
        info,
        getName(info),
        getRole(info)
    );
}

const client = Client('Juan', null, 'JUAN');
client.showName();
client.addEmail('demo@client.com');
client.showEmail();
client.showCompany();

console.log('!!!===========================!!!');

const employee = Employee('Pedro', 'demo@employee.com', 'Developer');
employee.showName();
employee.showRole();