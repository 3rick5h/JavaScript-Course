function crearUsuario(name, email) {
    return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};
}

let user1 = crearUsuario('Erick', 'ericksh2009@gmail.com');
let user2 = crearUsuario('Marlen', 'marlen@gmail,com');

console.log(user1, user2);