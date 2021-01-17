test('Devo conhecer as principais assertivas do jest', () => {
let number = null;
expect(number).toBeNull();//nulo
number = 10;
expect(number).not.toBeNull();//negacão n pode ser nulo
expect(number).toBe(10);//igualdade
expect(number).toEqual(10);//igualdade
expect(number).toBeGreaterThan(9);//Maior que nove. Sem certeza valor que vem.
expect(number).toBeLessThan(11);//Menor que 11 
});

test('Devo saber trabalhar com objetos', () => {
const obj= { name: 'John', email: 'john@mail.com'};
expect(obj).toHaveProperty('name');//verifica se possui prop name sem se preocupar com o valor
expect(obj).toHaveProperty('name', 'John');//verifica a propriedade e o valor
expect(obj.name).toBe('John');//verificando direto dentro da propriedade o valor

const obj2= { name: 'John', email: 'john@mail.com'};
expect(obj).toEqual(obj2);
//expect(obj).toBe(obj2);//que o obj seja o obj2
expect(obj).toBe(obj);//comparando obj com ele mesmo
});
