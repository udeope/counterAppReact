import React from 'react';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';


describe('Pruebas CounterApp', () => {

    const wrapper = shallow( <CounterApp />);
    
    test('debe retornar CounterApp correctamente', () => {
        

        

        expect(wrapper).toMatchSnapshot();


    })
    
    test('debe retornar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');


    });


    test('debe retornar el valor = 100', () => {
        
        const valor = 100;

        const wrapper = shallow( <CounterApp value={ 100 } />);

        const valorDefecto = wrapper.find('h2').text();

        expect(Number(valorDefecto)).toBe(valor);


    });

    test('debe incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });
    
    test('debe reducir con el boton -1', () => {

        const wrapper = shallow( <CounterApp value={10} />)

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');

    });

    test('debe volver al valor por defecto definido con props', () => {
        
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('10')

    })
    


});