import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { render, screen } from '@testing-library/react';

import type { IAssetData } from '@/shared/types';

import About from './page';

fetchMock.enableMocks();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('About page layout', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders all ui components', async () => {
    const mockData: IAssetData[] | null = null;
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const Tsx = await About();

    render(Tsx);

    expect(screen.getByTestId('about-article')).toBeInTheDocument();
    expect(screen.getByTestId('about-clients')).toBeInTheDocument();
    expect(screen.getByTestId('about-rights')).toBeInTheDocument();
  });
});
