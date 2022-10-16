import { render } from '@testing-library/react';

import JobsContainer from './jobs-container';

describe('JobsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
