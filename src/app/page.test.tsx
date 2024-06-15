import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import {
  NavigationContextProvider,
  OverlayContextProvider,
  ViewModeContextProvider,
} from '@/shared/providers';

import { OverlayWidget } from '@/widgets/overlay';
import { NavigationWidget } from '@/widgets/navigation';

import Home from './page';

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

describe('Home page layout', () => {
  it('renders all ui components', () => {
    render(
      <OverlayContextProvider>
        <NavigationContextProvider>
          <ViewModeContextProvider>
            <Home />
            <OverlayWidget id="navigation">
              <NavigationWidget />
            </OverlayWidget>
          </ViewModeContextProvider>
        </NavigationContextProvider>
      </OverlayContextProvider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Semyon Katz')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Photographer' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('web developer')).toBeInTheDocument();
  });

  it('button opens menu', () => {
    render(
      <OverlayContextProvider>
        <NavigationContextProvider>
          <ViewModeContextProvider>
            <Home />
            <OverlayWidget id="navigation">
              <NavigationWidget />
            </OverlayWidget>
          </ViewModeContextProvider>
        </NavigationContextProvider>
      </OverlayContextProvider>
    );

    expect(
      screen.getByRole('button', { name: 'Photographer' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Photographer' }));
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
});
