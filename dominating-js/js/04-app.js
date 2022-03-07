/**
 * Implicit Binding (this)
 * Se da por implicito donde encontrar el valor.
*/

const user = {
    name: 'Demo',
    age: 20,
    information() {
        console.log(`My name is ${ this.name } and  I'm ${ this.age } years old.`);
    },
    pet: {
        name: 'Luke',
        age: 3,
        information() {
            console.log(`My pet is called ${ this.name } and he is ${ this.age } year old.`);
        }
    }
}

user.information();
user.pet.information();