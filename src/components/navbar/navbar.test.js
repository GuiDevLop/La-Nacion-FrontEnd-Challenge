import { render, fireEvent } from '@testing-library/react';
import NavBar from './navbar';

describe('Test for NavBar', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<NavBar />)
    expect(getByTestId('navbar')).toBeInTheDocument()
    expect(getByTestId('logo')).toBeInTheDocument()
    expect(getByTestId('suscribe')).toBeInTheDocument()
  })
  test('onClick event', () => {
    const {getByTestId} = render(<NavBar />)
    //Sections
    const buttonSections = getByTestId('sections')
    expect(buttonSections.textContent).toBe('SECCIONES')
    fireEvent.click(buttonSections)
    expect(buttonSections.textContent).toBe('SECCIONES')
    //Search
    const buttonSearch = getByTestId('search')
    expect(buttonSearch.textContent).toBe('BUSCAR')
    fireEvent.click(buttonSearch)
    expect(buttonSearch.textContent).toBe('BUSCAR')
    //Sign in
    const buttonSignin = getByTestId('signin')
    expect(buttonSignin.textContent).toBe('INGRESAR')
    fireEvent.click(buttonSignin)
    expect(buttonSignin.textContent).toBe('INGRESAR')
  })
})
