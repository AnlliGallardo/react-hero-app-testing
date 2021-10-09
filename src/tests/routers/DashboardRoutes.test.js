import React from 'react'
import { mount } from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'




describe('Validar componente <DashboardRoutes/>', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'Anlli'
        }
    }
    
    test('Verificar el nombre del usuario registrado', () => {


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Anlli')
    })
})