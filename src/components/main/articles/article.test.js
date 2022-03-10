import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Article from './article';

const Mock = () => {
    return (
        <BrowserRouter>
          <Article elements={{ lead: "", title:"Title esto es un titulo de la novedad con unas cuantas lineas que ocupar", subheader:"Subheader", marquee:"", autor:"", url:"" }} />
        </BrowserRouter>
    )
}

describe('Test for Article', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Mock />)
    expect(getByTestId('article')).toBeInTheDocument()
  })
  test('Render', () => {
    render(<Mock />);
    const divElements = screen.queryAllByText(/Title esto es un titulo de la novedad con unas cuantas lineas que ocupar/i);
    expect(divElements.length).toBe(1)
  });

  test('Render', () => {
    const { container } = render(<Mock />);
    expect(screen.getByText('Subheader')).toBeInTheDocument()
    container.querySelector('.subh')
    expect(container.firstChild).toBeInTheDocument()
    expect(container.nextSibling).not.toBeInTheDocument()
  });
})
