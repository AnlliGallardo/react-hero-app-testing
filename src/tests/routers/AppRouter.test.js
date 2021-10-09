import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'
import '@testing-library/jest-dom'



describe('Pruebas en <AppRouter/>', () => {
    test('Mostrar login si no esta autenticado', () => {

        const contextValue ={
            dispatch: jest.fn(),
            user:{
                logged:false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Mostrar el componente de marvel al usuario autenticado', () => {

        const contextValue ={
            dispatch: jest.fn(),
            user:{
                logged:true,
                name: 'Anlli'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})