import { globalMetadata } from '@/shared/data';
import {
  OverlayContextProvider,
  ViewModeContextProvider,
} from '@/shared/providers';
import { fira } from '@/shared/style';
import '@/shared/style/globals.css';

import { NavigationWidget } from '@/widgets/navigation';
import { OverlayWidget } from '@/widgets/overlay';

import type { Viewport } from 'next';

export const metadata = globalMetadata;

export const viewport: Viewport = {
  themeColor: 'var(--background-color)',
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
          <ViewModeContextProvider>
            {children}
            <OverlayWidget id="navigation">
              <NavigationWidget />
            </OverlayWidget>
          </ViewModeContextProvider>
        </OverlayContextProvider>
      </body>
    </html>
  );
}
