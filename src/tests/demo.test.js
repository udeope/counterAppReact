
describe('Pruebas en el archivo demo.test.js', () => {

    test( 'debe de ser iguales los strings', () => {
    
        //1.Inicializacion
        const mensaje = 'Hola Mundo';
    
        //2. estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comportamiento
        expect( mensaje ).toBe(mensaje2); // ===
    
    })


})




