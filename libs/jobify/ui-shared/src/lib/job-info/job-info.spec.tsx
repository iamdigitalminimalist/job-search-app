import { render } from '@testing-library/react';

import JobInfo from './job-info';

describe('JobInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobInfo />);
    expect(baseElement).toBeTruthy();
  });
});
