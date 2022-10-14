import { render } from '@testing-library/react';

import SmallSidebar from './small-sidebar';

describe('SmallSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
