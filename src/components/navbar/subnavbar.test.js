import { render, fireEvent } from '@testing-library/react';
import SubNavBar from './subnavbar';
describe('Test for SubNavBar', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<SubNavBar />)
    expect(getByTestId('sub')).toBeInTheDocument()
    expect(getByTestId('dolar')).toBeInTheDocument()
    expect(getByTestId('weather')).toBeInTheDocument()
  })
  test('onClick event', () => {
    const {getByTestId} = render(<SubNavBar />)
    //News letters
    const buttonNews = getByTestId('newsletters')
    expect(buttonNews.textContent).toBe('Recibí Newsletters')
    fireEvent.click(buttonNews)
    expect(buttonNews.textContent).toBe('Recibí Newsletters')
    //Club La Nación
    const buttonClubNacion = getByTestId('clubnacion')
    expect(buttonClubNacion.textContent).toBe('Descubrí tus beneficios')
    fireEvent.click(buttonClubNacion)
    expect(buttonClubNacion.textContent).toBe('Descubrí tus beneficios')
  })
})
