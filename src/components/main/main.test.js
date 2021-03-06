import { render } from '@testing-library/react';
import { ARTICLES } from "../../data/articles.js";
import Main from './main';

describe('Test for Main', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Main articles={ARTICLES}/>)
    expect(getByTestId('main')).toBeInTheDocument()
    expect(getByTestId('cabezal')).toBeInTheDocument()
    expect(getByTestId('Body')).toBeInTheDocument()
    expect(getByTestId('sidebar')).toBeInTheDocument()
  })

  test("matches snapshot", () => {
    const { asFragment } = render(<Main articles={ARTICLES}/>);
    expect(asFragment()).toMatchSnapshot();
  }); 

  test('renders a section with empty text', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Main articles={ARTICLES}/>, div)
    expect(div.querySelector('section')).toHaveTextContent('')
  })
})
