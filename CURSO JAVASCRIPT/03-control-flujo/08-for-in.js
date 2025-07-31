let user = {
    id: 1,
    name: 'Erick Soto',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Puerco', 'Dragón', 'Canguro']
for (let indice in animales) {
    console.log(indice, animales[indice])
}