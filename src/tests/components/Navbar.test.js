import React from 'react'
import { mount } from 'enzyme'
import { Navbar } from '../../components/ui/Navbar'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter, Router } from 'react-router'


describe('Validar componente <Navbar>', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'Anlli'
        }
    }

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location:{},
        listen: jest.fn(),
        createHref: jest.fn(),

    }
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

        test('Validar el contenido del nombre del usuario ', () => {
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Anlli')    
        })

        test('Validar la funcion logout y usar history', () => {
            wrapper.find('button').prop('onClick')()
            expect(historyMock.replace).toHaveBeenCalledWith('/login')
        })
})