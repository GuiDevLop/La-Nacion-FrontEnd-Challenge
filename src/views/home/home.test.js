import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Home from './home';

describe('Test for Home', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('Home')).toBeInTheDocument()
  })

  test('Checking className', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    expect(div.querySelector('nav')).toHaveClass('navbar')
  })

  test('Checking text content', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    expect(div.querySelector('div')).toHaveTextContent('SECCIONES')
    expect(div.querySelector('div')).toHaveTextContent('BUSCAR')
    expect(div.querySelector('div')).toHaveTextContent('SUSCRIBITE')
    expect(div.querySelector('div')).toHaveTextContent('INGRESAR')
  })
})