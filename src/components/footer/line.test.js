import { render } from '@testing-library/react';
import { FOOTERLINKS } from "../../data/footer.js";
import Line from './line';

describe('Test for Line', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Line links={FOOTERLINKS.sections} name="SECCIONES"/>)
    expect(getByTestId('line')).toBeInTheDocument()
  })
})
