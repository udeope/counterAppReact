import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe', () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    })

    test('debe retornar un undefined si heroe no existe', () => {
        
        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    })

    test('debe retornar un array con los heroes de DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter( h => h.owner === owner);

        expect( heroes ).toEqual( heroeData );

    })

    test('debe retornar un array con los heroes de Marvel', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);
        console.log(heroes)

        expect( heroes.length ).toBe( 2 );

    })


    


})