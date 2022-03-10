import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Home from './views/home/home';
import App from './App';

describe('Test for App', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('app')).toBeInTheDocument()
  })

  test('App renders Home', () => {
    window.history.pushState({}, 'Test page', '/')
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
  })
})