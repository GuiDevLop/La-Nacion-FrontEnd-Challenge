import { render } from '@testing-library/react';
import { ARTICLES } from "../../data/articles.js";
import Header from './header';

describe('Test for Header', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Header sectionName="INFOGRAFIA" article={ARTICLES[0]}/>)
    expect(getByTestId('header')).toBeInTheDocument()
  })
})
