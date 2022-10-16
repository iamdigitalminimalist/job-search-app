import { render } from '@testing-library/react';

import JobItem from './job-item';

describe('JobItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobItem />);
    expect(baseElement).toBeTruthy();
  });
});
