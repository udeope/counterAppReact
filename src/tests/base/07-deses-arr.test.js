import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en 07-deses-arr.js', () => {

    test('Deberia retornar un array de letras y numeros', () => {

        // const arr = ['ABC', 123];

        const [ letras, numeros ]  = retornaArreglo();

        expect(letras).toBe('ABC');
        expect( typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    })
    


})