import { render } from '@testing-library/react';
import { ARTICLES } from "../../../data/articles.js";
import Sections from './section';

describe('Test for Sections', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<Sections articles={ARTICLES}/>)
    expect(getByTestId('Sections')).toBeInTheDocument()
  })
})
