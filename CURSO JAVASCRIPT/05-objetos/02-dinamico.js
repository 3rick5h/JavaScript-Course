const user = {id: 1};

user.name = 'Erick';
user.guardar = function () {
    console.log('Guardando', user.name); 
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({ id: 1 }); // para no cambiar nada en el objeto
const user1 = Object.seal({ id: 1 }); // para cambiar objetos ya existentes.
user1.name = 'Erick';
user1.id = 2;
console.log(user1)