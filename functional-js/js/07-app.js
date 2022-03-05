// Funciont into other function ()();

const client = () => () => console.log('Juan');
const fn = client();
fn();