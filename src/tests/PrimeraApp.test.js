import React from 'react';
import { getByText, render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';


describe('Pruenas en PrimeraApp', () => {
    
    // test('debe mostrar el mensaje "Hola soy Goku"', () => {
    //     const saludo = 'Hola soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> )
    //     //wrapper.getByText()
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    
    test('debe mostrar PrimeraApp correctamente', () => {
        
        const saludo = 'Hola soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitle';

        const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo)
        


    })
    
    


});