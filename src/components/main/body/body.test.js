import { render } from '@testing-library/react';
import { ARTICLES } from "../../../data/articles.js";
import Body from './body';

describe('Test for Body', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<Body articles={ARTICLES}/>)
    expect(getByTestId('Body')).toBeInTheDocument()
  })
})
