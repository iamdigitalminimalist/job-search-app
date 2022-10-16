import { render } from '@testing-library/react';

import SearchContainer from './search-container';

describe('SearchContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchContainer />);
    expect(baseElement).toBeTruthy();
  });
});
