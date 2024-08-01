import { LoaderWidget } from '@/widgets/loader';

import classes from './classes.module.css';

export default function Loading() {
  return (
    <main className={classes.loading__container}>
      <LoaderWidget />
    </main>
  );
}
