import { render } from '@testing-library/react';
import Image from './image';

describe('Test for Image', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<Image />)
    expect(getByTestId('image')).toBeInTheDocument()
  })
})
