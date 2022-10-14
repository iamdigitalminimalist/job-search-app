import { render } from '@testing-library/react';

import BigSidebar from './big-sidebar';

describe('BigSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BigSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
