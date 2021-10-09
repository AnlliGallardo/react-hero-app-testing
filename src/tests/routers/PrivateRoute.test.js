import {PrivateRoute} from '../../routers/PrivateRoute'
import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'



describe('Validar las rutas privadas', () => {

    const props ={
        location:{
            pathname: '/marvel'
        }
    }
  

    test('mostrar el componente si el usuario esta autenticado ', () => {

        Storage.prototype.setItem = jest.fn();

        const wrapper= mount(
            <MemoryRouter>
                <PrivateRoute
                isAuthenticated
                component={() =><span>Componente</span>}
                {...props}
                />
            </MemoryRouter>
        )
        console.log("xxxx"+wrapper.html()+"xxxx")

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
    
    test('usuario no autenticado ', () => {

        const wrapper= mount(
            <MemoryRouter>
                <PrivateRoute
                isAuthenticated
                component={() =><span>Componente</span>}
                {...props}
                />
            </MemoryRouter>
        )
        console.log("xxxx"+wrapper.html()+"xxxx")

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
})