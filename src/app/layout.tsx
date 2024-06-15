import {
  NavigationContextProvider,
  OverlayContextProvider,
  ViewModeContextProvider,
} from '@/shared/providers';
import { fira } from '@/shared/style';
import '@/shared/style/globals.css';

import { NavigationWidget } from '@/widgets/navigation';
import { OverlayWidget } from '@/widgets/overlay';

// TODO: Figure out viewport settings
import type { Metadata } from 'next';

// TODO: Figure out metdata settings
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fira.className}>
      <body className="body">
        <OverlayContextProvider>
          <NavigationContextProvider>
            <ViewModeContextProvider>
              {children}
              <OverlayWidget id="navigation">
                <NavigationWidget />
              </OverlayWidget>
            </ViewModeContextProvider>
          </NavigationContextProvider>
        </OverlayContextProvider>
      </body>
    </html>
  );
}
