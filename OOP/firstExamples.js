const raspas = {
    name: 'Raspas',
    password: '1234',

    login () {
        // console.log(this);
        console.log(`Bienvenido de nuevo, ${this.name}!`);
    }
}

const zari = { ...raspas };


// raspas.login();
zari.name = 'Zari';
// raspas.login();
// zari.login();

const userManager = {
    users: [raspas, zari],

    printAllNames() {
        this.users.forEach(user => {
            const { login } = user;

            // login.apply(user);
            login.call(user);
            // login.bind(user);
        });
    }
}

userManager.printAllNames();

// this

// ENCAPSULACIÓN
// HERENCIA
// POLIMORFISMO