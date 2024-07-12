import { Header } from '@/widgets/header';

import classes from './classes.module.css';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
}
